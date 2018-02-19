import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import AboutMe from '../components/About';
import './_scss/index.scss';

/* eslint-disable */
class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
  };
  render() {
    if (this.props.location.pathname == '/') {
      return (
        <div>
          <Helmet
            title="David Holbrook"
            meta={[
        { charSet: 'utf-8' },
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
          />
          <div className="background">
            <Header />
            <AboutMe />
          </div>
          <div>
            {this.props.children()}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title="David Holbrook"
          meta={[
              { charSet: 'utf-8' },
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <div className="background--black">
          <Header />
        </div>
        <div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}


export default TemplateWrapper;
