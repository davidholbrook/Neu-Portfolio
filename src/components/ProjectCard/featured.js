import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const Featured = props => (
  <div className="ProjectFeat" style={{ backgroundColor: props.bgColor }}>
    <div className="ProjectFeat__logo">
      <img src={props.logo} alt="The project's logo" />
    </div>
    <div className="ProjectFeat__children">
      {props.children}
      <Link
        to={props.link}
        className="ProjectFeat__btn"
        style={{ backgroundColor: props.bgColor }}
      >
        View Case Study
      </Link>
    </div>
  </div>
);

export default Featured;

Featured.propTypes = {
  bgColor: PropTypes.string,
  logo: PropTypes.string,
  children: PropTypes.string,
  link: PropTypes.string
};

Featured.defaultProps = {
  bgColor: "#bada55",
  logo: "https://lorempixel.com/158/56/abstract/",
  children: "Project Coming Soon",
  link: "#"
};
