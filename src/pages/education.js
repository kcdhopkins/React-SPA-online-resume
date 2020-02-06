import React from "react";

const education = () => {
  const mainstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    fontFamily: "'Merriweather', serif"
  };

  return (
    <div style={mainstyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-3">
            <span className="display-4">&#8249;Education&#47;&#8250;</span>
          </div>
        </div>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb shadow">
            <li className="breadcrumb-item">
              <a href="#homepage">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Education
            </li>
          </ol>
        </nav>

        <div className="card mb-3 mt-3 shadow">
          <div className="card-body">
            <h5 className="card-title">Tougaloo College</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Tougaloo, MS / May 2012
            </h6>
            <p className="card-text">
              Bachelors of Science in Computer Science
            </p>
          </div>
        </div>

        <div className="card mb-3 shadow">
          <div className="card-body">
            <h5 className="card-title">Sophia University</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Toyko, Japan / June 2009 - August 2009
            </h6>
            <p className="card-text">
              Studied the Japanese language/history abroad
            </p>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Continental Academy</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Miramar, FL / June 2009 - August 2009
            </h6>
            <p className="card-text">High School Diploma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default education;
