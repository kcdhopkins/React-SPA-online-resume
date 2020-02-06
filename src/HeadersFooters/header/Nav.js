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

  return (
    <>
      <Menu closeButton={menuClick} visiblilty={visible}/>
      <div className="navbar shadow tigerlily d-flex justify-content-between">
        <div className="navbar-brand">
          <span style={navStyle}>Keyairius Hopkins</span>
        </div>
        <div onClick={menuClick}>
          <FontAwesomeIcon style={navStyle} icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default Nav;
