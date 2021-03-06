import React from "react";

const footers = () => {
  const footerStyle = {
    flexShrink: "0",
    backgroundColor: "#4F3939"
  }

  const copyStyle = {
    fontFamily: "'Merriweather', serif",
    color: "white"
  }
  return (
    <div id ="footer" style ={footerStyle} className='p-5 mt-5'>
      <div className='container-fluid text-center'>
          <div>
                <span style={copyStyle}>&#169;Copyright <span>K</span> 2019</span>
          </div>
      </div>
    </div>
  );
};

export default footers;
