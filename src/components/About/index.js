import React from 'react';
import Link from 'gatsby-link';

const AboutMe = () => (
  <div>
    <p className="intro">My name is David, a front-end designer from Maple Grove, Minnesota. I have been creating websites for the last 10 years and having fun doing it.</p>
    <Link to="/about" className="aboutLink">More About Me</Link>
  </div>
);

export default AboutMe;

