import React from "react";

const home = ()=>{

    const homeStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1"
    }

    return (
        <div style ={homeStyle}><h1>Home</h1></div>
    );
}

export default home;