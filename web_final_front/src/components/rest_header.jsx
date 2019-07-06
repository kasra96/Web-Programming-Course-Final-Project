import React, { Component } from "react";
import "../assets/search_result.css";
import "../assets/global.css";
import Stars from "./stars";

class restaurant_header extends Component {
  state = {};
  render() {
    return (
      <div className="header_res">
        <div className="restaurant_logo_main">
          <img src={require("../images/baguette.jpg")} alt="" />
        </div>
        <div className="restaurant_info_main">
          <span className="restaurant_name_main">
            {this.props.rest_info.name}
          </span>
          <Stars average={this.props.rest_info.averageRate} />
          <div>
            <ul className="categories small_cat_font">
              {this.props.rest_info.categories.map((c, i) => {
                return (
                  <li key={i}>
                    <p>{c.persian_name} &bull; </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>{this.props.rest_info.address.addressLine}</div>
        </div>
      </div>
    );
  }
}

export default restaurant_header;
