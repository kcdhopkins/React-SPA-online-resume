import React from "react";
import backgroundImage from '../../assets/img/jumbotron.jpg';

const Jumbo = () => {
  const jumboStyle = {
    marginBottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    color: "white"
  }
  const buttonStyle = {
    margin: "5px"
  }
  return (
    <div id="jumbotron" style = {jumboStyle} className="jumbotron d-flex flex-column justify-content-center align-items-center jumbotron-bg-image">
      <h1>Keyairius Hopkins</h1>
      <p>
        Web developer with front and backend experience using html, css, vanilla/modern/bootstrap javascript on the frontend, php and mysql on the backend to provide the optimal user experience.
      </p>
      <div>
        <a style ={buttonStyle} className='btn btn-outline-light' href="https://github.com/kcdhopkins" role='button'> Github</a>
        <a style ={buttonStyle} className='btn btn-outline-light' href="https://www.linkedin.com/in/keyairius-hopkins-4b7b984a" role='button'>LinkedIn</a>
      </div>
    </div>
  );
};

export default Jumbo;
