import React from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

const postTemplate = ({ data }) => {
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

export default postTemplate;

export const pageQuery = graphql`
  query ProjectByPathName($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
      html
    }
  }
`;

