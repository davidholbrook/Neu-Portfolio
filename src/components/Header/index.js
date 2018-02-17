import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div role="header" className="mainHead">
      <h1>
        <Link to="/">
          David Holbrook
        </Link>
      </h1>
      <nav className="mainNav">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Portfolio</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      </nav>
  </div>
)

export default Header
