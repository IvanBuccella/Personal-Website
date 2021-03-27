import React from "react";

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
                <a target="_blank" href="https://docs.google.com/presentation/d/1AMMAF0Evw_Lc1XtkCiCrGCGbCxCXXWFpuszahMajb-A/">here</a>
              </li>
              <li>
                WebApp URL:&nbsp;
                <a target="_blank" href="https://gigadvisor.buccella.me/">here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>;
  }
}
export default Projects;
