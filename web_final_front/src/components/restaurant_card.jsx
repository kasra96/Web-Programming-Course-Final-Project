import React, { Component } from "react";
import "../assets/search_result.css";
import "../assets/global.css";
import Stars from "./stars";

class restaurant_card extends Component {
  state = {};
  render() {
    return (
      <div className="card col-sm-6">
        <div className="text_section">
          <div className="restaurant_logo">
            <img src={require("../images/baguette.jpg")} alt="" />
          </div>
          <div className="restaurant_info">
            {console.log(this.props.rest_info)}
            <span className="restaurant_name">{this.props.rest_info.name}</span>
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
        <div className="button_section text-center">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => this.props.show_restaurant(this.props.rest_info._id)}
          >
            شروع سفارش
          </button>
        </div>
      </div>
    );
  }
}

export default restaurant_card;
