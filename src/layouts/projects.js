import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const { markdownRemark: project } = data;
  return (
    <main className="grid">
      <Helmet title={`${project.frontmatter.title} - David Holbrook`} />
      <div className="Project__meta">
        <h2 className="Project__title">{project.frontmatter.title}</h2>
        <h3>ROLE</h3>
        <p>{project.frontmatter.role}</p>
        <h3>URL</h3>
        {project.frontmatter.url
          ? <p><Link to="{project.frontmatter.url}">{project.frontmatter.url}</Link></p>
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

