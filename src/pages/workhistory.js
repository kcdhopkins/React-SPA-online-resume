import React from "react";

const workhistory = () => {
  const homeStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    fontFamily: "'Merriweather', serif"
  };

  return (
    <div style={homeStyle}>
      <div className="container LibreBaskerville">
        <div className="row">
          <div className="col-sm-12 text-center mt-5 mb-5">
            <span className="display-4 LibreBaskerville">
              &#8249;Work History&#47;&#8250;
            </span>
          </div>
        </div>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#homepage">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Work History
            </li>
          </ol>
        </nav>

        <div className="card mb-1">
          <div className="card-body">
            <h5 className="card-title">Wingseed, LLC</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Fullstack Developer / November 2018 - Present
            </h6>
            <p className="card-text">
              Responsible for Front-End and Back-End development. Works heavily
              in PHP, JavaScript, Handlebars and Backbone using an MVC style
              architecture, in an agile development lifecycle environment. Uses
              Handlebars and backbone templating engines to pre-compile
              templates for faster loading times.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">NSSC(NASA Shared Services Center)</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Software Developer I / Feburary 2013 - Feburary 2017
            </h6>
            <p className="card-text">
              Worked heavily with Java on the back end to decode incoming data
              and to store that data for later use in a MySQL database. Used
              toad for MySQL to connect to local databases to monitor data
              changes, create tables, and to run any query needed to assist in
              development and debugging. All Java Development was done in the
              Integrated Development Environment Eclipse, using an apache local
              webserver. These tools were used to meet a specific set of
              requirements set forth by the customer. After local development
              and successful completion of developer testing, IT testing and
              functional user testing, all work would be presented to the IT
              Security team for their review. Once complete, the completed work
              would be presented before the board to receive a “Push to
              Production” approval. If approved, all code would be staged to the
              Liferay portal in the production environment. Used styling
              languages, such as CSS to enhance the overall look, and feel of
              webpages, used minor functionality such as “hover &quot;to provide
              a user-friendly experience. Worked heavily in JavaScript to
              manipulate data on the client side to prevent page refreshes, as
              well as make changes to the DOM when data changes through event
              listeners and callbacks. Worked extensively in ServiceNow to
              recreate older applications that were initially created using
              other languages, such as Java, .NET and ColdFusion; as well as set
              up silo’s, tables and advanced custom forms that required
              modifications to the “out of the box” features of ServiceNow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workhistory;
