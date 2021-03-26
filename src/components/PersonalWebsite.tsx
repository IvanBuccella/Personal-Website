import React from "react";
import "../styles/main.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

class PersonalWebsite extends React.Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Header />
          <div className="page-content">
            <Route exact path="/">
              <Redirect to="/about-me/" />
            </Route>
            <Route exact path="/about-me">
              <Redirect to="/about-me/" />
            </Route>
            <Route exact path="/about-me/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Redirect to="/projects/" />
            </Route>
            <Route exact path="/projects/">
              <Projects />
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}
export default PersonalWebsite;
