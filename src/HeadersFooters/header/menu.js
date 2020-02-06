import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = props => {
  const menuStyle = {
    listStyle: "none",
    fontSize: "3.5vw",
  };

  const iconStyle = {
    fontFamily: "'Molle', cursive",
    fontSize: "4vh",
    position: "absolute",
    right: "30",
    top: "25"
  };

  return (
      <div id= "navMenuStyle" className={ props.visiblilty ? "navMenuShow" : "navMenuHide"}>
        <div onClick={props.closeButton}>
          <FontAwesomeIcon id ="closeButton" style = {iconStyle} icon={faTimes} />
        </div>
        <ul style={menuStyle}>
          <Link to="/">
            <li onClick={props.closeButton}>HOME</li>
          </Link>
          <Link to="/education">
            <li onClick={props.closeButton}>EDUCATION</li>
          </Link>
          <Link to="/workhistory">
            <li onClick={props.closeButton}>WORK HISTORY</li>
          </Link>
          <Link to="/clubandorganization">
            <li onClick={props.closeButton}>CLUBS AND ORGANIZATION</li>
          </Link>
        </ul>
    </div>
  );
};

export default Menu;
