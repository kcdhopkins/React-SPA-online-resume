import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Jumbo from "./Jumbo";

const headers = () => {
  return (
    <div id="headers">
      <Jumbo />
      <Nav />
      <Link to="/">
        <button> Click Me </button>
      </Link>
      <Link to="/education">
        <button> Click Me </button>
      </Link>
      <Link to="/workhistory">
        <button> Click Me </button>
      </Link>
      <Link to="/clubandorganization">
        <button> Click Me </button>
      </Link>
    </div>
  );
};

export default headers;
