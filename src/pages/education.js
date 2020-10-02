import React from "react";
import content from "./pageContext/content";

const education = () => {

  const context = content.page.education;

  const mainstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    fontFamily: "'Merriweather', serif"
  };

  const educationHistory = context.edu.map( (text, index) => {
    return(
      <div key={index} className="card mb-3 mt-3 shadow">
          <div className="card-body">
            <h5 className="card-title">{text.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {text.addressdate}
            </h6>
            <p className="card-text">
              {text.studied}
            </p>
          </div>
      </div>
    )
  });

  return (
    <div style={mainstyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-3">
              <span className="display-4">{context.title}</span>
          </div>
        </div>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb shadow">
            <li className="breadcrumb-item">
              <a href="#homepage">{content.page.homeTitle}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {context.title}
            </li>
          </ol>
        </nav>
      
        {educationHistory}

      </div>
    </div>
  );
};

export default education;
