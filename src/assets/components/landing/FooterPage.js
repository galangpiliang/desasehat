import React, { Component } from "react";

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
            <li>HOME</li>
            <li>MENU</li>
            <li>STORY</li>
            <li>DETOX</li>
            <li>LOCATIONS</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterPage;
