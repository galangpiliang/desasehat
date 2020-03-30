import React, { Component } from "react";
import { Link } from "react-router-dom";

export class FooterPage extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__icon">
          <i class="fab fa-instagram fa-2x"></i>
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-facebook fa-2x"></i>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <Link to="/signin">ADMIN LOGIN</Link>{" "}
            </li>
            <li>FEATURE</li>
            <li>DOWNLOAD</li>
            <li>ABOUT US</li>
            {/* <li>LOCATIONS</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterPage;
