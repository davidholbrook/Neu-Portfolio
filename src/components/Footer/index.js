import React from 'react';
import Link from 'gatsby-link';

import Linkedin from '../../layouts/images/socials/Linkedin';
import Github from '../../layouts/images/socials/Github';
import Twitter from '../../layouts/images/socials/Twitter';
import Codepen from '../../layouts/images/socials/Codepen';

const Footer = () => (
  <div className="mainFooter">
    <p>
      {}
      &copy; 2018 David Holbrook. Made with{' '}
      <Link to="https://www.gatsbyjs.org/">Gatsby JS</Link> and{' '}
      <Link to="https://reactjs.org/">React</Link>.
    </p>
    <ul className="Footer__socials">
      <li>
        <a href="https://www.linkedin.com/in/dmholbrook">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/davidholbrook">
          <Github />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/davidholbrook/">
          <Codepen />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/davidholbrook">
          <Twitter />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
