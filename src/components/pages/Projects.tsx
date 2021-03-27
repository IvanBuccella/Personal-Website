import React from "react";
import { Link } from "react-router-dom"

class Projects extends React.Component {
  render() {
    return <>
      <div className="page projects">
        <h1 className="page-title">
          Projects
        </h1>
        <div className="all-projects">
          <div className="project">
            <h2 className="title">
              GigAdvisor
            </h2>
            <ul>
              <li>
                Presentation (in Italian):&nbsp;
                <Link to="https://docs.google.com/presentation/d/1AMMAF0Evw_Lc1XtkCiCrGCGbCxCXXWFpuszahMajb-A/">here</Link>
              </li>
              <li>
                WebApp URL:&nbsp;
                <Link to="https://gigadvisor.buccella.me/">here</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>;
  }
}
export default Projects;
