import React, { Component } from "react";
import "../assets/main.css";
import "../assets/global.css";

class Check_box extends Component {
  state = {};
  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={this.props.name}
          checked={this.props.checked}
          onClick={() =>
            this.props.on_click(
              this.props.name,
              document.getElementById(this.props.name).checked
            )
          }
        />
        <label className="form-check-label" for="defaultCheck1">
          {this.props.name}
        </label>
      </div>
    );
  }
}

export default Check_box;
