import React from 'react';

export default function Template({ data }) {
  const { markdownRemark: project } = data;
  return (
    <div>
      <h2>{project.frontmatter.title}</h2>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

