import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

class AboutMe extends React.Component {
  render() {
    return <>
      <div className="page about-me">
        <div className="personal-information">
          <div className="left">
            <img src="/images/ivan-buccella.jpg" />
            <div className="icons-container">
              <a className="link" href="https://it.linkedin.com/in/ivanbuccella" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                />
              </a>
              <a className="link" href="mailto:ivan@buccella.dev?subject=Mail from Website">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className="right">
            <p className="role">Software Engineer</p>
            <h1 className="name">Ivan Buccella</h1>
            <h2 className="description">
              Hi! I'm a software engineer @<a target="_blank" href="https://beefree.io">BEE by Growens</a>.<br />
              I am a web developer with good knowledge of front-end techniques, but I love working on back-end environments too.<br />
              I'm a fan of "pair programming" and I like working as part of a team as you grow together, learn together and improve your skills.<br />
              I like to be super organised... I can’t handle mess!<br /><br />
              Let's connect on <a className="link" href="https://it.linkedin.com/in/ivanbuccella" target="_blank">Linkedin</a>&nbsp;
              or <a className="link" href="mailto:ivan@buccella.dev?subject=Mail from Website">email</a>.
            </h2>
            <div className="cta-container">
              <a className="cta" href="/files/CV-Ivan-Buccella.pdf" target="_blank">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
export default AboutMe;
