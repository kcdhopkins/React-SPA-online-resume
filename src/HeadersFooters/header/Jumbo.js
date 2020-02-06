import React from "react";
import backgroundImage from "../../assets/img/jumbotron.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Jumbo = () => {
  const jumboStyle = {
    marginBottom: 0,
    backgroundImage: `url(${backgroundImage})`,
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
      <p className="text-center">
        Web developer with front and backend experience using html, css,
        vanilla/modern/bootstrap javascript on the frontend, php and mysql on
        the backend to provide the optimal user experience.
      </p>
      <div>
        <a
          style={buttonStyle}
          className="btn btn-outline-light"
          href="https://github.com/kcdhopkins"
          role="button"
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a
          style={buttonStyle}
          className="btn btn-outline-light"
          href="https://www.linkedin.com/in/keyairius-hopkins-4b7b984a"
          role="button"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Jumbo;
