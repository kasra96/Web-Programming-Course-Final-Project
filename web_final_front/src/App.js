import React, { Component } from "react";
import axios from "axios";
import "./assets/main.css";
import "./assets/global.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainBody from "./components/main_body";
import Serach_results from "./components/search_results";

class App extends Component {
  state = { someBool: false, open_restaurants: [], closed_restaurants: [] };

  search = (str1, str2) => {
    console.log(str1);
    console.log(str2);
    axios.get("http://localhost:3001/api/restaurants?area=صادقیه").then(res => {
      // console.log(res.data);
      var returned_result = res.data;
      this.initialize_restaurants(returned_result);
    });
    const someBool = true;
    this.setState({ someBool: true });
  };

  initialize_restaurants = restaurants => {
    console.log("now it gets initialized!");
    var i;
    var open_rest_arr = [];
    var closed_rest_arr = [];
    for (i = 0; i < restaurants.length; i++) {
      if (this.is_open(restaurants[i])) open_rest_arr.push(restaurants[i]);
      else closed_rest_arr.push(restaurants[i]);
    }
    this.setState({
      open_restaurants: open_rest_arr,
      closed_restaurants: closed_rest_arr
    });
  };

  is_open(restaurant) {
    return true;
  }

  choose_body() {
    if (this.state.someBool)
      return (
        <Serach_results
          open_restaurant_array={this.state.open_restaurants}
          close_restaurant_array={this.state.closed_restaurants}
        />
      );
    else return <MainBody searchMethod={this.search} />;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div>{this.choose_body()}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
