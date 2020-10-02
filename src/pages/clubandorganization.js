import React from "react";
import content from "./pageContext/content";

const clubandorganization = () => {

  const clubStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    fontFamily: "'Merriweather', serif"
  };

  const context = content.page.clubandorganization;

  const clubHistory = context.clubs.map( (text, index) => {
    return(
      <div key = {index} className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">{text.title}</h5>
            <p className="card-text">
             {text.about}
            </p>
          </div>
        </div>
    )
  });

  return (
    <div style={clubStyles}>
      <div className="container LibreBaskerville">
        <div className="row">
          <div className="col-sm-12 text-center mb-3">
            <span className="display-4">
              {context.title}
            </span>
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

        {clubHistory}
        
      </div>
    </div>
  );
};

export default clubandorganization;
