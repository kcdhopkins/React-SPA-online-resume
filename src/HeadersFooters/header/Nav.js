import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const navStyle = {
    fontFamily: "'Molle', cursive",
    fontSize: "25px",
    color: "white"
  };

  const onHover = e => {
    e.target.style.color = "black";
  };

  const offHover = e => {
    e.target.style.color = "white";
  };

  return (
    <div
      id="nav"
      className=" navbar shadow tigerlily d-flex justify-content-between"
    >
      <div className="navbar-brand">
        <span style={navStyle}>Keyairius Hopkins</span>
      </div>
      <div onMouseOver={onHover} onMouseOut={offHover}>
        <FontAwesomeIcon style={navStyle} icon={faBars} />
      </div>
    </div>
  );
};

export default Nav;
