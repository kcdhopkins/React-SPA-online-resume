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

  const menuStyleHide = {
    width: "100vw",
    height: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: "0",
    zIndex: "0",
    transform: "translate3d(-100vw, 0, 0)"
  };

  const menuStyleShow = {
    width: "100vw",
    height: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: "0",
    zIndex: "0",
    transition: "width 2s height 2s, transform 2s"
  };

  const positionStyle = {
    position: "static",
    zIndex: "1"
  };

  const showMenu = () => {};

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
      <div style={visible ? menuStyleShow : menuStyleHide}>
        <Menu closeButton={menuClick} />
      </div>
      <div
        style={positionStyle}
        className="navbar shadow tigerlily d-flex justify-content-between"
      >
        <div className="navbar-brand">
          <span style={navStyle}>Keyairius Hopkins</span>
        </div>
        <div id="hamburgerMenu" onClick={menuClick}>
          <FontAwesomeIcon id="hamIcon" style={navStyle} icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default Nav;
