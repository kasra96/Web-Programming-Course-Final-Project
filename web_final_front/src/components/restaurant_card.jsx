import React, { Component } from "react";
import "../assets/search_result.css";

class restaurant_card extends Component {
  state = {};
  render() {
    return <div className="card col-sm-6">{this.props.rest_info.name}</div>;
  }
}

export default restaurant_card;
