import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = props => {
  const menuStyle = {
    listStyle: "none",
    fontSize: "3.5vw"
  };

  return (
      <div id= "navMenuStyle" className={ props.visiblilty ? "navMenuShow" : "navMenuHide"}>
        <div onClick={props.closeButton}>
          <FontAwesomeIcon icon={faBars} />
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
