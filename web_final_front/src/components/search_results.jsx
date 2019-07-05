import React, { Component } from "react";
import "../assets/search_result.css";
import Restaurant from "./restaurant_card";

class Search_results extends Component {
  state = { local_restaurant_search_input: "" };

  filter_restaurant(restaurants) {
    console.log("it came here");
    console.log(restaurants.length);

    var filtered_restaurants = new Array();
    for (var i = 0; i < restaurants.length; i++) {
      if (
        restaurants[i].name.startsWith(this.state.local_restaurant_search_input)
      ) {
        filtered_restaurants.push(restaurants[i]);
      }
    }

    return filtered_restaurants.map(restaurant => (
      <Restaurant key={restaurant._id} rest_info={restaurant} />
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
                {this.props.close_restaurant_array.map(restaurant => (
                  <Restaurant key={restaurant._id} rest_info={restaurant} />
                ))}
              </div>
            </div>
          </div>
          <div className="category_section col-sm-3">
            <div className="inner_cat_sec">som cat</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search_results;
