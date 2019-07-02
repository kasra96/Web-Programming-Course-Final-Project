#include "cuda_runtime.h"
#include "device_launch_parameters.h"
#include <iostream>
#include <stdio.h>
#include<stdlib.h>
#include <omp.h>
#include <cstdlib>
#include <vector>
#include <chrono>
#include <cmath>
#include <numeric>
#include <cufft.h>
//#include <cufftXt.h>
//#include <cufftw.h>
#include <fstream>
#include <dirent.h>
#include <algorithm>
#include <assert.h>  
#include <math.h>
#include <string>

#define BATCH 1
#define RANK 1
#define SCALE 10000000
#define THREADS 256

using namespace std;

/*
 * The kernel which computes LAD pairwise between elements of complete song fft and sample song fft, then computes total difference between them, scales it then returns. 
 */
__global__ void comparator(cufftComplex* dev_complete_in_data, cufftComplex* dev_sample_in_data, int* output, int* sampling_size) {
	__shared__ float sdata[THREADS];
	unsigned int tid = threadIdx.x;
	unsigned int i = blockIdx.x*blockDim.x + threadIdx.x;
	if(i < *sampling_size/2 +1){
	
		float cx = (float)dev_complete_in_data[i].x;
		float cy = (float)dev_complete_in_data[i].y;
		
		float sx = (float)dev_sample_in_data[i].x;
		float sy = (float)dev_sample_in_data[i].y;
		
		float error = (float)abs(sqrt(cx*cx + cy*cy)-sqrt(sx*sx + sy*sy)) / SCALE;
		sdata[tid] = error;
	}else
		sdata[tid] = 0;
	
	__syncthreads();
	
	if (tid == 0) {
		float total_error = 0;
		for(int j = 0; j < THREADS; j++)
			total_error += sdata[j];
		atomicAdd(output, (int)total_error);
	}
}

/*
 * A container for holding fft result.
 */
class ConvertedSong{
public:
	cufftComplex *data = nullptr;
    int size = 0;
};


/*
 * A container for storing music txt data which is read from file.
 */
class MySong {
public:
    float *data = nullptr;
    int size = 0;
};

/*
 * This fucntion reads content of a text file of integers(song txt file)and stores them in vector.
 * args: string &song_path: path to song text file
 * return: vector<float>, a vector containing text file content
 */
vector<float> read_txt_data(const string &song_path) {
    ifstream inputFile(song_path);
    vector<float> data;
    if (inputFile) {
        int value;
        while (inputFile >> value) {
            data.push_back(value);
        }
    }
    return data;
}

/*
 * A function for slicing a vector and get a subvector.
 * args: m: start point
 * 		 n: end point
 */
vector<float> slice(vector<float> &v, int m, int n){
    auto first = v.cbegin() + m;
    auto last = v.cbegin() + n + 1;
    vector<float> vec(first, last);
    return vec;
}

/*
 * A function for extracting first <size> vector elements in array format
 * args: input: vector for extraction
 * size: number of elements in order to extract from vector 
 */
float *convert_vector_to_array(vector<float> input, int size) {
    auto *arr = static_cast<float *>(malloc(sizeof(float) * size));
    input = slice(input, 0, size - 1);
	copy(input.begin(), input.end(), arr);
	return arr;
}

/*
 * A simple function for converting a vector to an array.
 */
float *convert_vector_to_array(vector<float> input) {
    auto *arr = static_cast<float *>(malloc(sizeof(float) * input.size()));
    copy(input.begin(), input.end(), arr);
	return arr;
}

/*
 * reads a directory and returns its files with absolute path.
 * args: char *directory_path: path to target directory with no space character in it.
 * return: vector<string>: absolute path of directory files 
 */
vector<string> read_directory(const char *directory_path) {
    DIR *dir;
    struct dirent *ent;
    vector<string> my_list;
    string dir_path(directory_path);
    if ((dir = opendir(directory_path)) != nullptr) {
        cout << "reading files in the directory:" << endl;
        int skip = 2;
        while ((ent = readdir(dir)) != nullptr) {
            //TODO delete this
			if (skip > 0) {
                skip--;
                continue;
            }
            string s(ent->d_name);
            my_list.push_back(dir_path + "\\" + s);
            printf_s("\t%s\n", ent->d_name);
        }
        closedir(dir);
    } else {
        perror("could not open directory...");
    }
    return my_list;
}

/*
 * A procedure for reading songs of a directory and store them in arrays.
 * This function uses other fucntions like <read_txt_data> and <convert_vector_to_array>
 */
vector<MySong> read_songs(vector<string> path_of_complete_songs, bool mode) {
    vector<MySong> data;
    vector<vector<float>> container;
	int min_song_size = 1000000000;
	cout<<"songs sizes in order:"<<endl;
	
    for (const auto &path_of_complete_song : path_of_complete_songs) {
        vector<float> rain = read_txt_data(path_of_complete_song);
		container.push_back(rain);
		if(rain.size() < min_song_size)
			min_song_size = rain.size();
	}
	
	for (const auto &rain : container) {
		float *rainfall = nullptr;
		if(mode)//sample songs
			rainfall = convert_vector_to_array(rain, min_song_size);
        else//complete songs
			rainfall = convert_vector_to_array(rain);
		MySong s;
        s.data = rainfall;
		if(mode)
			s.size = min_song_size;
		else
			s.size = rain.size();
		printf("\t%d\n",s.size);
        data.push_back(s);
        //rain.clear(); TODO what is problem?
    }
    return data;
}

/*
 * diallocates memory of songs
 */
void delete_songs(vector<MySong> songs) {
    for (auto &song : songs) {
        delete song.data;
    }
}

/*
 * diallocates memory of fft arrays
 */
void delete_songs(vector<ConvertedSong> songs) {
    for (auto &song : songs) {
        delete song.data;
    }
}
 
/*
 * performs fft on <sample> songs with help of cufft
 * return: vector<ConvertedSong>: cufft of songs
 */
vector<ConvertedSong> perform_fft(vector<MySong> songs){
	cout<<"performing fft on sample songs..."<<endl;
	cudaSetDevice(0);		
	cudaError_t error;
	vector<ConvertedSong> output;
	int iter = 1;
	
	for (auto &song : songs) {
		cufftHandle plan;	
		
		cufftReal *i_data;
		cufftComplex *o_data;
		cufftComplex *host_o_data = (cufftComplex *)malloc(sizeof(cufftComplex) * (song.size/2 + 1));
		
		error = cudaMalloc((void**)&i_data, song.size * sizeof(cufftReal));
		printf("\tcudaMalloc i_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		error = cudaMalloc((void**)&o_data, (song.size/2+1) * sizeof(cufftComplex));
		printf("\tcudaMalloc o_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		error = cudaMemcpy(i_data, song.data, song.size * sizeof(float), cudaMemcpyHostToDevice);
		printf("\tcudaMemcpy host to dev i_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		if (cufftPlan1d(&plan, song.size, CUFFT_R2C , BATCH) != CUFFT_SUCCESS){
			fprintf(stderr, "CUFFT error: Plan creation failed");
		}
		
		
		if (cufftExecR2C(plan, i_data, o_data) != CUFFT_SUCCESS){
			fprintf(stderr, "CUFFT error: ExecC2C Forward failed");
		}
		
		error = cudaDeviceSynchronize();
		printf("\tsynchronize returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		cudaMemcpy(host_o_data, o_data, (song.size /2 + 1)* sizeof(cufftComplex), cudaMemcpyDeviceToHost);
		printf("\tcudaMemcpy dev to host o_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		ConvertedSong c;
		c.data = host_o_data;
		c.size = song.size/2 + 1;
		
		output.push_back(c);
		
		iter++;
		cufftDestroy(plan);
		cudaFree(i_data);
		cudaFree(o_data);
		cout<<endl;
	}
	cout<<endl<<endl<<endl;
	return output;
}

/*
 * performs fft on <complete> songs with help of cufft
 * return: vector<ConvertedSong>: cufft of songs
 */
vector<ConvertedSong> perform_partial_fft(vector<MySong> songs, int sampling_size){
	cout<<"performing fft on complete songs..."<<endl;
	cudaSetDevice(0);		
	cudaError_t error;
	vector<ConvertedSong> output;
	int iter = 1;
	
	for (auto &song : songs) {
		cufftHandle plan;	
		
		cufftReal *i_data;
		cufftComplex *o_data;
		cufftComplex *host_o_data = (cufftComplex *)malloc(sizeof(cufftComplex) * (sampling_size/2 + 1));
		
		error = cudaMalloc((void**)&i_data, sampling_size * sizeof(cufftReal));
		printf("\tcudaMalloc i_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		error = cudaMalloc((void**)&o_data, (sampling_size/2+1) * sizeof(cufftComplex));
		printf("\tcudaMalloc o_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		//cout<<song.data<<endl;
		//cout<<song.data + 3<<endl;
		//error = cudaMemcpy(i_data, song.data + song.size / 2, sampling_size * sizeof(cufftReal), cudaMemcpyHostToDevice);
		error = cudaMemcpy(i_data, song.data, sampling_size * sizeof(cufftReal), cudaMemcpyHostToDevice);
		printf("\tcudaMemcpy host to dev i_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		if (cufftPlan1d(&plan, sampling_size, CUFFT_R2C , BATCH) != CUFFT_SUCCESS){
			fprintf(stderr, "\tCUFFT error: Plan creation failed");
		}
		
		
		if (cufftExecR2C(plan, i_data, o_data) != CUFFT_SUCCESS){
			fprintf(stderr, "\tCUFFT error: ExecC2C Forward failed");
		}
		
		error = cudaDeviceSynchronize();
		printf("\tsynchronize returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		cudaMemcpy(host_o_data, o_data, (sampling_size /2 + 1)* sizeof(cufftComplex), cudaMemcpyDeviceToHost);
		printf("\tcudaMemcpy dev to host o_data returned %s (code %d) iteration %d\n", cudaGetErrorString(error), error, iter);
		
		ConvertedSong c;
		c.data = host_o_data;
		c.size = sampling_size/2 + 1;
		
		output.push_back(c);
		
		iter++;
		cufftDestroy(plan);
		cudaFree(i_data);
		cudaFree(o_data);
		cout<<endl;
	}
	cout<<endl<<endl<<endl;
	return output;
}

/*
 * initializes memories and copies for kernel lunch then initiates kernel, gets results of comparion of sample song fft and complete song fft then returns it.
 * return: vector<int*>: contains reuslt of comparsion between each pair of sample song and complete song 
 */
vector<int*> compare_match(vector<ConvertedSong> converted_complete_songs,vector<ConvertedSong> converted_sample_songs, int sampling_size){
	
	cout<<"preparing for kernel lunch..."<<endl;
	cudaError_t error;
	vector<cufftComplex*> completes;
	vector<cufftComplex*> samples;
	vector<int*> sampling_sizes;
	vector<int*> dev_outputs;
	
	vector<int*> host_outputs;	
	
	vector<cudaStream_t> streams;
	
	double start_time = omp_get_wtime();
	
	for(int i = 0; i < converted_sample_songs.size() * converted_complete_songs.size(); i++){
		cufftComplex* dev_complete_in_data;
		error = cudaMalloc((void**)&dev_complete_in_data, (sampling_size/2 + 1) * sizeof(cufftComplex));
		printf("\tcudaMalloc dev_complete_in_data returned %s (code %d)\n", cudaGetErrorString(error), error);
		completes.push_back(dev_complete_in_data);
		
		cufftComplex* dev_sample_in_data;
		error = cudaMalloc((void**)&dev_sample_in_data, (sampling_size/2 + 1) * sizeof(cufftComplex));
		printf("\tcudaMalloc dev_sample_in_data returned %s (code %d)\n", cudaGetErrorString(error), error);
		samples.push_back(dev_sample_in_data);
		
		int* dev_output;
		error = cudaMalloc((void**)&dev_output, sizeof(int));
		printf("\tcudaMalloc dev_output returned %s (code %d)\n", cudaGetErrorString(error), error);
		dev_outputs.push_back(dev_output);
		
		int* dev_sampling_s;
		error = cudaMalloc((void**)&dev_sampling_s, sizeof(int));
		printf("\tcudaMalloc dev_sampling_size returned %s (code %d)\n", cudaGetErrorString(error), error);
		sampling_sizes.push_back(dev_sampling_s);
		
		cudaStream_t st;
		cudaStreamCreate(&st);
		streams.push_back(st);
		
		host_outputs.push_back(new int[1]);
	}
	cout<<endl;
		
	int total_compares = (sampling_size/2 + 1);
	int num_blocks = (int)ceil(total_compares / THREADS);
	int num_threads_per_block = THREADS;
	
	int red = 0;
	int k = converted_complete_songs.size();
	int i = 0, j = 0;
	for (auto &samp_song : converted_sample_songs) {
		j = 0;
		for (auto &comp_song : converted_complete_songs) {
			error = cudaMemcpyAsync(completes.at(i * k + j), comp_song.data, (sampling_size/2 + 1) * sizeof(cufftComplex), cudaMemcpyHostToDevice, streams.at(i * k + j));
			printf("\tcudaMemcpyAsync completes returned %s (code %d)\n", cudaGetErrorString(error), error);
			error = cudaMemcpyAsync(samples.at(i * k + j), samp_song.data, (sampling_size/2 + 1) * sizeof(cufftComplex), cudaMemcpyHostToDevice, streams.at(i * k + j));
			printf("\tcudaMemcpyAsync samples returned %s (code %d)\n", cudaGetErrorString(error), error);
			error = cudaMemcpyAsync(sampling_sizes.at(i * k + j), &sampling_size, sizeof(int), cudaMemcpyHostToDevice, streams.at(i * k + j));
			printf("\tcudaMemcpyAsync sampling_sizes returned %s (code %d)\n", cudaGetErrorString(error), error);
			error = cudaMemcpyAsync(dev_outputs.at(i * k + j), &red, sizeof(int), cudaMemcpyHostToDevice, streams.at(i * k + j));
			printf("\tcudaMemcpyAsync dev_outputs returned %s (code %d)\n", cudaGetErrorString(error), error);
			
			comparator << <num_blocks, num_threads_per_block, 0, streams.at(i * k + j)>> > (completes.at(i * k + j), samples.at(i * k + j), dev_outputs.at(i * k + j), sampling_sizes.at(i * k + j));
			j++;
		}
		i++;
	}
	cout<<endl;
	i = 0;
	j = 0;
	
	for(i = 0; i < converted_sample_songs.size(); i++){
		for(j = 0; j < converted_complete_songs.size(); j++){
			error = cudaMemcpyAsync(host_outputs.at(i * k + j), dev_outputs.at(i * k + j), sizeof(int), cudaMemcpyDeviceToHost, streams.at(i * k + j));
			printf("\tcudaMemcpyAsync host_outputs returned %s (code %d)\n", cudaGetErrorString(error), error);
		}
	}
	cout<<endl;
	i = 0;
	j = 0;
	
	for(i = 0; i < converted_sample_songs.size(); i++){
		for(j = 0; j < converted_complete_songs.size(); j++){
			error = cudaStreamSynchronize(streams.at(i * k + j));
			printf("\tstreamSynchronize returned %s (code %d)\n", cudaGetErrorString(error), error);
		}
	}
	cout<<endl;
	
	i = 0;
	j = 0;
	for(i = 0; i < converted_sample_songs.size(); i++){
		for(j = 0; j < converted_complete_songs.size(); j++){
			error = cudaStreamDestroy(streams.at(i * k + j));
			printf("\tstreamDestroy returned %s (code %d)\n", cudaGetErrorString(error), error);
		}
	}
	cout<<endl;
		
	error = cudaDeviceSynchronize();
	printf("\tdeviceSynchronize returned %s (code %d)\n", cudaGetErrorString(error), error);
		
	double end_time = omp_get_wtime();
	cout <<endl<<"compare_match time: "<<end_time - start_time<<endl;
			
	error = cudaDeviceReset();
	printf("\tdeviceReset returned %s (code %d)\n", cudaGetErrorString(error), error);
	
	i = 0;
	j = 0;
	for(i = 0; i < converted_sample_songs.size(); i++){
		for(j = 0; j < converted_complete_songs.size(); j++){
			cudaFree(completes.at(i * k + j));
			cudaFree(samples.at(i * k + j));
			cudaFree(dev_outputs.at(i * k + j));
			cudaFree(sampling_sizes.at(i * k + j));
		}
	}
	return host_outputs;
}

int main(int argc, char **argv)
{
	if (argc < 3) {
        perror("Not enough args...");
        return EXIT_FAILURE;
    }

    vector<string> path_of_complete_songs = read_directory(argv[1]);
    vector<MySong> songs = read_songs(path_of_complete_songs,false);
 	
	vector<string> path_of_sample_songs = read_directory(argv[2]);
    vector<MySong> sample_songs = read_songs(path_of_sample_songs,true);
    	
	if(sample_songs.size() == 0){
		cout<<"no sample song to detect..."<<endl;
		return 0;
	}
	
	if(songs.size() == 0){
		cout<<"no complete song to perform fft..."<<endl;
		return 0;
	}
	
	int ref_sampling_size = sample_songs.at(0).size;
	cout<<"ref_sampling_size = "<<ref_sampling_size<<endl;
	
	vector<ConvertedSong> converted_sample_songs = perform_fft(sample_songs);
	vector<ConvertedSong> converted_complete_songs = perform_partial_fft(songs, ref_sampling_size);
	
	vector<int*> result = compare_match(converted_complete_songs,converted_sample_songs,ref_sampling_size);
	
	cout<<"results:"<<endl;
	int k = converted_complete_songs.size();
	for(int i = 0; i < converted_sample_songs.size(); i++){
		int min_index;
		int min = 1000000000;
		for(int j = 0 ; j < converted_complete_songs.size(); j++){
			//cout<<*result.at(i*k + j)<<endl;
			if(*result.at(i*k + j) < min){
				min = *result.at(i*k + j);
				min_index = j;
			}
		}
		cout<<path_of_sample_songs.at(i)<<" >>> "<<path_of_complete_songs.at(min_index)<<endl;
	}
	delete_songs(songs);
	delete_songs(sample_songs);
	delete_songs(converted_complete_songs);
	delete_songs(converted_sample_songs);
	
	cout<<"The End..."<<endl;
	return 0;
}