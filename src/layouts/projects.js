import React from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

const ProjectWrapper = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <main>
      <h2>{frontmatter.title}</h2>
      <div
        /* eslint-disable-next-line */
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
};

export default ProjectWrapper;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

