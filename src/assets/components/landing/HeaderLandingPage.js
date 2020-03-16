import React from "react";
import "./HeaderLandingPage.scss";

function HeaderLandingPage(props) {
  return (
    <div className="container-page">
      <div className="navbar-page">
        <h1>Desa Sehat</h1>
        <ul className="list-page">
          <li onClick={() => props.history.push("/signin")}>Login</li>
          <li>Feautures</li>
          <li>Download</li>
          <li>About Us</li>
        </ul>
        <input type="text" />
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}

export default HeaderLandingPage;
