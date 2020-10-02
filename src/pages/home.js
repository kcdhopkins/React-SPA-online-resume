import React from "react";
import me from "../assets/img/me.jpg";
import content from "./pageContext/content";

const home = () => {

  const context = content.page.home;

  const homeStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    fontFamily: "'Merriweather', serif",
    maxWidth: "1080px"
  };

  const imgStyle = {
    borderRadius: "50%"
  };

  const paragraphStyle = {
    lineHeight: "24px"
  };

  return (
    <div className="d-flex justify-content-center ml-3 mr-3">
      <div style={homeStyle}>
        <span style={{marginBottom: "10px"}}><img
          className="shadow"
          style={imgStyle}
          src={me}
          height="150"
          width="150"
          alt="photoOfKeyairius"
          title="Photo of Keyairius"
        />
        </span>
        <p style={paragraphStyle}>
          {context.paragraph1}
        </p>
      </div>
    </div>
  );
};

export default home;
