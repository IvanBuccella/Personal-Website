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
            <p>
              GigAdvisor is an experimental platform designed to work within the scenario of gig economy, a phenomenon marked by a variety of issues - low levels of social protection for gig-workers; pervasive algorithmic control; atomization of work processes, etc. - that increase the need for more insightful empirical investigations and effective regulatory solutions.
              <br />
              The platform allows crowdworkers to express, share and discuss different kinds of assessments (by means of predefined scales and free text) on the quality of the experiences with the platforms they work for.
              <br />
              The tool stems from a research project that put critical data studies and data-driven computational social science to explore new approaches to the analysis and regulation of digital economy.
            </p>
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
