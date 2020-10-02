import React from "react";
import backgroundImage from "../../assets/img/jumbo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Jumbo = () => {
  const jumboStyle = {
    marginBottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    color: "white",
    fontFamily: "'Merriweather', serif"
  };
  const buttonStyle = {
    margin: "5px"
  };
  return (
    <div
      id="jumbotron"
      style={jumboStyle}
      className="jumbotron d-flex flex-column justify-content-center align-items-center jumbotron-bg-image"
    >
      <h1 className="text-center">Keyairius Hopkins</h1>
      <p className="text-center" style = {{maxWidth: "1080px"}}>
        Fullstack web developer with experience using html, css ,javascript, bootstrap, React, and Redux on the frontend, php and mysql on
        the backend to provide the optimal user experience, and handle any business need.
      </p>
      <div>
        <a
          style={buttonStyle}
          className="btn btn-outline-light"
          href="https://github.com/kcdhopkins/React-SPA-online-resume"
          role="button"
          dataToggle="tooltip" dataPlacement="bottom" title="Github code for this site"
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a
          style={buttonStyle}
          className="btn btn-outline-light"
          href="https://www.linkedin.com/in/keyairius-hopkins-4b7b984a"
          role="button"
          dataToggle="tooltip" dataPlacement="bottom" title="My Linkedin profile"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Jumbo;
