import React, { Component } from "react";
import "../assets/search_result.css";
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
            <Stars average={3.3} />
          </div>
        </div>
        <div className="button_section text-center">
          <button type="button" className="btn btn-info">
            Link
          </button>
        </div>
      </div>
    );
  }
}

export default restaurant_card;
