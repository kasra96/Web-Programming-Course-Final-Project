import React, { Component } from "react";
import "../assets/main.css";
import "../assets/global.css";

class Start extends Component {
  state = {};
  initialize(average) {
    var starArr = new Array();
    for (var i = 0; i < Math.floor(average); i++) {
      starArr.push(<span className="fa fa-star checked">&nbsp;</span>);
    }
    if (average !== Math.floor(average)) {
      starArr.push(
        <span className="fa fa-star-half-alt halfchecked">&nbsp;</span>
      );
      for (var i = 0; i < 4 - Math.floor(average); i++) {
        starArr.push(<span className="far fa-star checked">&nbsp;</span>);
      }
    } else {
      for (var i = 0; i < 5 - Math.floor(average); i++) {
        starArr.push(<span className="far fa-star checked">&nbsp;</span>);
      }
    }
    return starArr;
  }
  render() {
    return (
      <ul>
        {this.initialize(this.props.average).map((c, i) => {
          return (
            <li className="star_list" key={i}>
              {c}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Start;
