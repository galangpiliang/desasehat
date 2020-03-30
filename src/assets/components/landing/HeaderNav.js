import React, { Component } from "react";
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";

export class HeaderNav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
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
              <li>
                <a href="#feature">Feature</a>
                {/* Feature */}
              </li>
              <li>
                <a href="#dl">Download</a>
                {/* Download */}
              </li>
              <li>AboutUs</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
