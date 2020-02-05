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
    marginRight: "10vw"
  };

  const imgStyle = {
    borderRadius: "50%"
  };

  return (
    <div style={homeStyle}>
      <img style={imgStyle} src={me} height="150" width="150" />
      <p>
        Software/Applications/Web Developer with 5 years of experience using
        software development languages such as PHP on the back-end for storing
        and processing data serverside. Experince using client side scripting
        and styling languages such as JavaScript, CSS and bootstrap on the
        front-end to delivery unparalleled customer service in regards to design
        and functionality. Work has been completed in an Agile development life
        cycle environment using daily stand-ups to keep progress moving forward,
        and demoing the product to the client to ensure accuracy and timelyness.
        Side and personal projects have are located at my{" "}
        <a href="https://github.com/kcdhopkins">github account</a>.
      </p>
    </div>
  );
};

export default home;
