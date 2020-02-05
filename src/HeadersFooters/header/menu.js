import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = props => {
  const menuStyle = {
    listStyle: "none",
    fontSize: "3.5vw"
  };

  const containerStyle = {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={containerStyle}>
      <div onClick={props.closeButton}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul style={menuStyle}>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/education">
          <li>EDUCATION</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
