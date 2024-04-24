import React from "react";
import profile from "../../images/Motion.png";

function AboutMe() {
  return (
    <div className="aboutme">
      <p style={{ fontWeight: "550", fontSize: "x-large", marginLeft: "15px" }}>
        About Me
      </p>
      <img
        src={profile}
        alt="A"
        style={{
          borderRadius: "27px",
          display: "block",
          height: "80px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <p
        style={{
          fontWeight: "550",

          fontSize: "x-large",
          margin: "0",
          textAlign: "center",
          fontStyle: "oblique",
        }}
      >
        Maid booking
      </p>
      <p style={{ fontStyle: "italic" }}>
        I am a Full Stack Web Developer. I have great passion for 
        Website designing or developing. And I love to do things as
        perfectly as I can.
      </p>
    </div>
  );
}
export default AboutMe;
