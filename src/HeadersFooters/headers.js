import React from "react";
import { Link } from "react-router-dom";

const headers = ()=>{

    return (
        <div>
            <h1>headers</h1>
            <Link to="/"><button> Click Me </button></Link>
            <Link to="/education"><button> Click Me </button></Link>
        </div>
    );
}

export default headers;