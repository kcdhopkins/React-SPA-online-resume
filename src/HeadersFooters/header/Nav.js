import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const navStyle = {
    fontFamily: "'Molle', cursive",
    color: "white"
  };
  return (
    <>
      <Navbar className="shadow tigerlily d-flex justify-content-between">
        <Navbar.Brand>
          <span style={navStyle}>Keyairius Hopkins</span>
        </Navbar.Brand>
        <FontAwesomeIcon style={navStyle} icon={faBars} />
      </Navbar>
    </>
  );
};

export default Nav;
