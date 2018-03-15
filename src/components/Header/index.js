import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from '../../layouts/images/Logo';

export default class Header extends Component {
  state = {
    toggl: false,
  };

  toggle = () => {
    this.setState({ toggl: !this.state.toggl });
  };

  render() {
    return (
      <div role="Banner" className="mainHead">
        <Link to="/">
          <h1 className="logo">
            <Logo width="120" height="120" />
          </h1>
        </Link>
        <nav className="mainNav navDesktop">
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
        <nav className="mobileNav">
          <button onClick={this.toggle} className="mobile__opener">
            Open Navagation
          </button>
          {this.state.toggl === true ? (
            <div className="mobile__toggl">
              <div className="mobile__list">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <a onClick={this.toggle}>Close</a>
                </li>
              </div>
            </div>
          ) : (
            ''
          )}
        </nav>
      </div>
    );
  }
}
