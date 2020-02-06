import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = props => {
  const menuStyle = {
    listStyle: "none",
    fontSize: "3.5vw"
  };

  const iconStyle = {
    fontFamily: "'Molle', cursive",
    fontSize: "4vh",
    position: "absolute",
    right: "30",
    top: "25"
  };

  const textStyle = {
    color: "white",
    textDecoration: "none"
  }
  
  const linkStyle = { 
    textDecoration: "none"
  };

  const show = "navMenuShow";
  const hide = "navMenuHide";

  const hover = e => {
    e.target.style.color = "black";
    e.target.style.textShadow = "1px 1px 5px grey";
  };

  const unHover = e => {
    e.target.style.color = "white";
    e.target.style.textShadow = "none";
  };

  return (
      <div id= "navMenuStyle" className={ props.visiblilty ? show : hide}>
        <div onClick={props.closeButton}>
          <FontAwesomeIcon id ="closeButton" style = {iconStyle} icon={faTimes} />
        </div>
        <ul style={menuStyle}>
          <Link to="/" style={linkStyle} onMouseOver = {hover} onMouseOut = {unHover}>
            <li onClick={props.closeButton}><span style ={textStyle}>HOME</span></li>
          </Link>
          <Link to="/education" style={linkStyle} onMouseOver = {hover} onMouseOut = {unHover}>
            <li onClick={props.closeButton}><span style ={textStyle}>EDUCATION</span></li>
          </Link>
          <Link to="/workhistory" style={linkStyle} onMouseOver = {hover} onMouseOut = {unHover}>
            <li onClick={props.closeButton}><span style ={textStyle}>WORK HISTORY</span></li>
          </Link>
          <Link to="/clubandorganization" style={linkStyle} onMouseOver = {hover} onMouseOut = {unHover}>
            <li onClick={props.closeButton}><span style ={textStyle}>CLUBS AND ORGANIZATION</span></li>
          </Link>
        </ul>
    </div>
  );
};

export default Menu;
