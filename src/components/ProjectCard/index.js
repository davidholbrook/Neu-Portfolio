import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => (
  <div className="ProjectCard">
    <div className="ProjectCard__background" style={{ backgroundColor: props.bgColor }}>
      <img src={props.logo} alt="The project's logo" />
    </div>
    {props.children}
  </div>
);

export default ProjectCard;

ProjectCard.propTypes = {
  bgColor: PropTypes.string,
  logo: PropTypes.string,
  children: PropTypes.string,
};

ProjectCard.defaultProps = {
  bgColor: '#bada55',
  logo: 'https://lorempixel.com/158/56/abstract/',
  children: 'Project Coming Soon',
};
