import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: project } = data;
  return (
    <main className="grid">
      <Helmet title={`${project.frontmatter.title} - David Holbrook`} />
      <div className="Project__meta">
        <h2>{project.frontmatter.title}</h2>
        <p>{project.frontmatter.role}</p>
        {project.frontmatter.url
          ? <p>{project.frontmatter.url}</p>
          : <p>No website available</p>
        }
      </div>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: project.html }} className="Project__children"/>
    </main>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        title
        role
        url
      }
    }
  }
`;

