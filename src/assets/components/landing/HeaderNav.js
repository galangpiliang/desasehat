import React, { Component } from "react";
import logo from "../../images/logo.png";

export class HeaderNav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <span className="desa">desa</span>
            <span className="sehat">sehat</span>
          </div>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Feature</li>
            <li>Download</li>
            <li>AboutUs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
