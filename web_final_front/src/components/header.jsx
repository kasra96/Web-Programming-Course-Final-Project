import React, { Component } from "react";
import "../assets/main.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="main-header fix-position">
        <ul className="nav list-inline">
          <li className="li-class1">
            <a id="my_a_tag" href="register_login.html">
              ورود
            </a>
          </li>
          <li>
            <a id="my_a_tag" href="register_login.html">
              عضویت
            </a>
          </li>
          <li>
            <a id="my_a_tag" className="li-class2" href="register_login.html">
              راهنما
            </a>
          </li>
        </ul>
        <hr size="4px" id="my_line" />
      </header>
    );
  }
}

export default Header;
