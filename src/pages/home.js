import React from "react";
import me from "../assets/img/me.jpg";

const home = () => {
  const homeStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    marginLeft: "10vw",
    marginRight: "10vw",
    fontFamily: "'Merriweather', serif"
  };

  const imgStyle = {
    borderRadius: "50%"
  };

  return (
    <div style={homeStyle}>
      <img
        className="shadow"
        style={imgStyle}
        src={me}
        height="150"
        width="150"
        alt="photoOfMe"
      />
      <p>
        FullStack/Software/Web Developer with 5 years of experience using
        languages such as PHP on the back-end for storing
        and processing data serverside or to a SQL database. Experince using client side scripting
        and styling languages such as JavaScript, CSS, bootstrap and React on the
        front-end. Understanding of the React framework, using it's virtual DOM and life cycle methods combined with a state management framework to prodive clearer more organized code as well as reduced complexity in the state management department. Deep understanding of JSON, closure, eventloop and functional/object oriented design. 
        All work has been completed in an Agile work environment using 
        daily stand-ups to provide updates, and potentially unblock any blockers that are present. Sprint reviews to 
        present work decided upon during that sprint. Sprint planning to decide which stories would be brought in or
        or backlogged during the next sprint; Also used sprint planning to decide point values for stories that would
        reflect it's difficulty and/or how much time it would take to complete. Projects and other things I play around with that scream all things code are located here ->
        <a href="https://github.com/kcdhopkins">github account</a>.
      </p>
    </div>
  );
};

export default home;
