import React, { Component } from "react";
import "../assets/search_result.css";
import Restaurant from "./rest_header";
import Check_box from "./chech_box";

class Restaurant_page extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          id="first_image"
          className="img-responsive"
          src={require("../images/restaurant-search-banner-2x.jpg")}
          alt="Chania"
        />
        <div className="rest_header">
          <Restaurant
            key={this.props.rest_info._id}
            rest_info={this.props.rest_info}
            show_restaurant={this.props.show_restaurant}
          />
        </div>
        <div id="main_panel" className="row">
          <div className="restuarant_section col-sm-9">
            <div className="inner_rest_sec">
              <div className="restaurant_subsection row">
                {/* {this.filter_restaurant(this.props.open_restaurant_array)} */}
              </div>
              <div className="w-100" />
              <div className="restaurant_subsection row">
                {/* {this.filter_restaurant(this.props.close_restaurant_array)} */}
              </div>
            </div>
          </div>
          <div className="category_section col-sm-3">
            <div className="inner_cat_sec">
              {console.log("rest info")}
              {console.log(this.props.rest_info)}
              {this.props.rest_info.categories.map((category, i) => (
                <div>
                  <a>{category.persian_name}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant_page;
