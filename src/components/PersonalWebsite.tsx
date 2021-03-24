import React, { Component } from "react";
import "../styles/main.scss";
import Header from "./partials/Header";
import { BrowserRouter as Router } from "react-router-dom";

class PersonalWebsite extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Header />
        </div>
      </Router>
    );
  }
}
export default PersonalWebsite;
