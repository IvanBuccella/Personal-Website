import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="logo" to="/">
          <div className="circle">IB</div>
          <div className="text">
            <b>Ivan</b>&nbsp;Buccella
          </div>
        </Link>
        <ul className="menu">
          <li className="menu-item active">
            <Link className="link" to="/">
              About Me
            </Link>
          </li>
          <li className="menu-item">
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="menu-item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="menu-toggle">Here the Hamburger Toggle</div>
      </header>
    );
  }
}
export default Header;
