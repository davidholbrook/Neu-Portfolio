import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ProjectCard = props => (
  <div className="ProjectCard">
    <div className="ProjectCard__background" style={{ backgroundColor: props.bgColor }}>
      <img src={props.logo} alt="The project's logo" />
    </div>
    <div className="ProjectCard__children">
      {props.children}
      <Link to={props.link} className="ProjectCard__btn" style={{ backgroundColor: props.bgColor }}>View Case Study</Link>
    </div>
  </div>
);

export default ProjectCard;

ProjectCard.propTypes = {
  bgColor: PropTypes.string,
  logo: PropTypes.string,
  children: PropTypes.string,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  bgColor: '#bada55',
  logo: 'https://lorempixel.com/158/56/abstract/',
  children: 'Project Coming Soon',
  link: '#',
};
