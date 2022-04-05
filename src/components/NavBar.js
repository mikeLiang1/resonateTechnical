import React from "react";
import logo from "../images/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="Contact App logo" />
      <p>Contacts App</p>
    </div>
  );
}
export default NavBar;
