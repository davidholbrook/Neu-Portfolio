import React from "react";
import Link from "gatsby-link";

const AboutMe = () => (
  <div>
    <p className="intro">
      Hi I'm David, a front-end designer from Minnesota. I have been creating
      websites for the last 10 years and love doing it.
    </p>
    <Link to="/about" className="aboutLink">
      More About Me
    </Link>
  </div>
);

export default AboutMe;
