import React, { Component } from "react";
import axios from "axios";
import "./assets/main.css";
import "./assets/global.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainBody from "./components/main_body";
import Serach_results from "./components/search_results";
import Restaurant_page from "./components/restaurant_page";

class App extends Component {
  state = {
    main_specifier: 1,
    open_restaurants: [],
    closed_restaurants: [],
    foods: [],
    chosen_restaurant: [],
    cityName: ""
  };

  search = (str1, str2) => {
    console.log(str1);
    console.log(str2);
    axios
      .get("http://localhost:3001/api/restaurants?area=" + str1)
      .then(res => {
        // console.log(res.data);
        var returned_result = res.data;
        this.initialize_restaurants(returned_result, str2);
      });
  };

  show_restaurant = rest_id => {
    var str = "http://localhost:3001/api/restaurants/" + rest_id;
    axios.get(str).then(res => {
      console.log(str);
      console.log(res.data);
      var returned_result = res.data;
      this.setState({
        chosen_restaurant: returned_result,
        main_specifier: 3
      });
    });
  };

  initialize_restaurants = (restaurants, cityName) => {
    console.log("now it gets initialized!");
    var i;
    var open_rest_arr = [];
    var closed_rest_arr = [];
    var foods_arr = [];
    for (i = 0; i < restaurants.length; i++) {
      if (this.is_open(restaurants[i])) open_rest_arr.push(restaurants[i]);
      else closed_rest_arr.push(restaurants[i]);
      for (var j = 0; j < restaurants[i].foods.length; j++) {
        var is_repetitive = false;
        for (var k = 0; k < foods_arr.length; k++) {
          if (foods_arr[k] == restaurants[i].foods[j].persian_foodSet)
            is_repetitive = true;
        }
        if (!is_repetitive)
          foods_arr.push(restaurants[i].foods[j].persian_foodSet);
      }
    }
    console.log("foods");
    console.log(foods_arr);
    this.setState({
      open_restaurants: open_rest_arr,
      closed_restaurants: closed_rest_arr,
      foods: foods_arr,
      main_specifier: 2,
      cityName: cityName
    });
  };

  is_open(restaurant) {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var currentTime = "" + h;
    console.log(restaurant.openingTime);
    console.log(restaurant.closingTime);
    console.log(currentTime);
    if (
      (currentTime > restaurant.openingTime) &
      (currentTime < restaurant.closingTime)
    ) {
      return true;
    } else {
      return false;
    }
  }

  choose_body() {
    if (this.state.main_specifier == 2)
      return (
        <Serach_results
          open_restaurant_array={this.state.open_restaurants}
          close_restaurant_array={this.state.closed_restaurants}
          foods_array={this.state.foods}
          show_restaurant={this.show_restaurant}
          cityName={this.state.cityName}
        />
      );
    else if (this.state.main_specifier == 3)
      return <Restaurant_page rest_info={this.state.chosen_restaurant} />;
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
