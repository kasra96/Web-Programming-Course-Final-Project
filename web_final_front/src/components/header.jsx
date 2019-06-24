import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header class="main-header fix-position">
        <ul class="nav">
          <li class="li-class1">
            <a href="register_login.html">ورود</a>
          </li>
          <li>
            <a href="register_login.html">عضویت</a>
          </li>
          <li>
            <a class="li-class2" href="register_login.html">
              راهنما
            </a>
          </li>
        </ul>
        <hr size="4px" class="line" />
      </header>
    );
  }
}

export default Header;
