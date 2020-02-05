import React from "react";

const footers = () => {
  const footerStyle = {
    flexShrink: "0"
  }
  return (
    <div id ="footer" style ={footerStyle} className='bg-secondary p-5 mt-5'>
      <div className='container-fluid text-center'>
          <div>
                <span >&#169;Copyright <span>K</span> 2019</span>
          </div>
      </div>
    </div>
  );
};

export default footers;
