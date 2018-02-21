import React from 'react';
import Link from 'gatsby-link';

import Logo from '../../layouts/images/Logo';

const Header = () => (
  <div role="Banner" className="mainHead">
    <Link to="/">
      <h1 className="logo">
        <Logo width="120" height="120" />
      </h1>
    </Link>
    <nav className="mainNav">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </nav>
  </div>
);

export default Header;
