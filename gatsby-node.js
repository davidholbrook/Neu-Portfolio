const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/layouts/projects.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            path
            title
            role
            url
          }
        }
      }
    }
  }`)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        });
      });
    });
};
