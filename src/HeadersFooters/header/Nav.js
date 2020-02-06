import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";

const Nav = () => {
  const navStyle = {
    fontFamily: "'Molle', cursive",
    fontSize: "25px",
    color: "white"
  };

  const [visible, setVisiblilty] = useState(false);

  const menuClick = () => {
    if (visible) {
      setVisiblilty(false);
    } else {
      setVisiblilty(true);
    }
  };

  const hover = e => {
    e.target.style.color = "black";
  };

  const unHover = e => {
    e.target.style.color = "white";
  };

  return (
    <>
      <Menu closeButton={menuClick} visiblilty={visible} />
      <div className="navbar shadow tigerlily d-flex justify-content-between mb-4">
        <div className="navbar-brand">
          <span style={navStyle}>Keyairius Hopkins</span>
        </div>
        <div className="hovering" onClick={menuClick}>
          <span onMouseOver={hover} onMouseOut={unHover}>
            <FontAwesomeIcon id="closeButton" style={navStyle} icon={faBars} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
