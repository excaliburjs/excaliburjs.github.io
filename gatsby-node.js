/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const docsPageTemplate = path.resolve(`src/templates/DocsPageTemplate.js`)

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: `${docsPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id }, // additional data can be passed via context
      })
    })
  })
}

// 'slug' field for TOC
// https://github.com/gatsbyjs/gatsby/issues/4038
// https://github.com/lourd/descioli-design/commit/ee40a6df9b3db4bd7dc208da66875663cb64a341
