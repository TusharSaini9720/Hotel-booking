import React from "react";
import AboutMe from "./aboutme";
import Contact from "./contact";

function Footer() {
  return (
    <div className="footer" id="footer">
      <AboutMe />
      <Contact />
      <p
        style={{
          textAlign: "center",
          gridColumnStart: 1,
          gridColumnEnd: 3,
          fontSize: "small",
        }}
      >
        © 2024 Hotels Booking Guide. All rights reserved.
      </p>
    </div>
  );
}
export default Footer;
