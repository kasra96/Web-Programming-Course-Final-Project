import React, { Component } from "react";
import "../assets/search_result.css";
import Restaurant from "./restaurant_card";
import Check_box from "./chech_box";

class Search_results extends Component {
  state = { local_restaurant_search_input: "", checked_foods: [] };

  filter_restaurant(restaurants) {
    var filtered_restaurants = new Array();
    for (var i = 0; i < restaurants.length; i++) {
      if (
        restaurants[i].name.search(this.state.local_restaurant_search_input) !=
        -1
      ) {
        filtered_restaurants.push(restaurants[i]);
      }
    }

    if (this.state.checked_foods.length > 0) {
      var filtered_restaurants_by_food = new Array();
      for (var i = 0; i < filtered_restaurants.length; i++) {
        var chooseRestaurant = false;
        for (var j = 0; j < filtered_restaurants[i].foods.length; j++) {
          console.log("look1");
          for (var k = 0; k < this.state.checked_foods.length; k++) {
            if (
              filtered_restaurants[i].foods[j].persian_foodSet ==
              this.state.checked_foods[k]
            )
              chooseRestaurant = true;

            console.log("look");
            console.log(filtered_restaurants[i].foods[j].persian_foodSet);
            console.log(this.state.checked_foods[k]);
          }
        }
        if (chooseRestaurant)
          filtered_restaurants_by_food.push(filtered_restaurants[i]);
      }
      filtered_restaurants = filtered_restaurants_by_food;
    }

    return filtered_restaurants.map(restaurant => (
      <Restaurant key={restaurant._id} rest_info={restaurant} />
    ));
  }

  on_click = (str, boolean) => {
    var foodArr = new Array();
    foodArr = this.state.checked_foods;
    if (boolean) {
      foodArr.push(str);
    } else {
      for (var i = 0; i < foodArr.length; i++) {
        if (foodArr[i] == str) {
          foodArr.splice(i, 1);
        }
      }
    }
    this.setState({ checked_foods: foodArr });
  };

  filter_checkBox(foods) {
    var filtered_foods = new Array();
    var foodArr = new Array();
    foodArr = this.state.checked_foods;
    for (var i = 0; i < foods.length; i++) {
      var is_repetitive = false;
      for (var j = 0; j < foodArr.length; j++) {
        if (foodArr[j] == foods[i]) {
          is_repetitive = true;
        }
      }
      if (!is_repetitive) filtered_foods.push(foods[i]);
    }

    return filtered_foods.map((foodName, i) => (
      <Check_box
        key={i}
        checked={false}
        name={foodName}
        on_click={this.on_click}
      />
    ));
  }

  set_input_str(string) {
    this.setState({
      local_restaurant_search_input: string
    });
  }

  render() {
    return (
      <div>
        <img
          id="first_image"
          className="img-responsive"
          src={require("../images/restaurant-search-banner-2x.jpg")}
          alt="Chania"
        />
        <h3 className="text-right">
          {this.props.open_restaurant_array.length +
            this.props.close_restaurant_array.length}
          رستوران امکان سرویس‌دهی به
          <abbr>{" تهران "}</abbr>را دارند
        </h3>
        <hr />
        <div className="search-container">
          <input
            type="text"
            id="area_search"
            placeholder="جست‌و‌جوی رستوران در این محدوده"
            name="search"
            onChange={() =>
              this.set_input_str(document.getElementById("area_search").value)
            }
          />
          <button type="submit">
            <i className="fa fa-search" id="my_search_botton" />
          </button>
        </div>
        <div id="main_panel" className="row">
          <div className="restuarant_section col-sm-9">
            <div className="inner_rest_sec">
              <div className="restaurant_subsection row">
                {this.filter_restaurant(this.props.open_restaurant_array)}
              </div>
              <div className="w-100" />
              <div className="restaurant_subsection row">
                {this.filter_restaurant(this.props.close_restaurant_array)}
              </div>
            </div>
          </div>
          <div className="category_section col-sm-3">
            <div className="inner_cat_sec">
              {this.state.checked_foods.map((foodName, i) => (
                <Check_box
                  key={i}
                  checked={true}
                  name={foodName}
                  on_click={this.on_click}
                />
              ))}
              <hr className="sideBarLine" />
              {this.filter_checkBox(this.props.foods_array)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search_results;
