/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const docsPageTemplate = path.resolve(`src/templates/DocsPageTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: docsPageTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

// 'slug' field for TOC
// https://github.com/gatsbyjs/gatsby/issues/4038
// https://github.com/lourd/descioli-design/commit/ee40a6df9b3db4bd7dc208da66875663cb64a341