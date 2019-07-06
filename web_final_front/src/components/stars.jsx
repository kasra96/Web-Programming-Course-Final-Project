import React, { Component } from "react";
import "../assets/main.css";
import "../assets/global.css";

class Stars extends Component {
  state = {};
  initialize(average) {
    var starArr = new Array();
    if (average !== Math.floor(average)) {
      for (var i = 0; i < 4 - Math.floor(average); i++) {
        starArr.push(<span className="far fa-star">&nbsp;</span>);
      }
      starArr.push(<span className="fa fa-star-half-alt">&nbsp;</span>);
    } else {
      for (var i = 0; i < 5 - Math.floor(average); i++) {
        starArr.push(<span className="far fa-star">&nbsp;</span>);
      }
    }
    for (var i = 0; i < Math.floor(average); i++) {
      starArr.push(<span className="fa fa-star">&nbsp;</span>);
    }
    return starArr;
  }
  render() {
    return (
      <ul className="star_list">
        {this.initialize(this.props.average).map((c, i) => {
          return <li key={i}>{c}</li>;
        })}
      </ul>
    );
  }
}

export default Stars;
