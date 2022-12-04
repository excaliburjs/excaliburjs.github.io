require('dotenv').config({
  path: `.env`,
})
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: 'Excalibur.js HTML5 Game Engine',
    discussionBoard: 'https://github.com/excaliburjs/Excalibur/discussions',
  },
  plugins: [
    {
      resolve: 'gatsby-source-typedoc',
      options: {
        src: [`${__dirname}/ex/edge/src/engine/index.ts`],
        typedoc: {
          excludePrivate: true,
          tsconfig: `${__dirname}/ex/edge/src/engine/tsconfig.json`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-catch-links',
      options: {
        excludePattern: /^\/(examples|docs\/api|https?:\/\/)/i,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-typedoc-symbol-links',
            options: {
              basePath: '/docs/api/edge/',
              linkTitleMessage(symbolPath, missing) {
                return missing
                  ? `Missing link to '${symbolPath}' docs. We will happily accept a PR to fix this! 🙏`
                  : `View '${symbolPath}' in Excalibur.js Edge API docs`
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              directory: `${__dirname}/snippets/`,
            },
          },
          `gatsby-remark-prismjs`,
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    //
    // We need this "duplicate" config here, due to
    // https://github.com/gatsbyjs/gatsby/issues/19859
    //
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              directory: `${__dirname}/snippets/`,
            },
          },
          `gatsby-remark-prismjs`,
          'gatsby-remark-copy-linked-files',
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: GITHUB_TOKEN,
        graphQLQuery: `
        { 
          repository(owner: "excaliburjs", name: "excalibur") {
            latestRelease: releases(first: 1) {
              edges {
                node {
                  tag {
                    name
                  }
                  publishedAt
                  url
                  releaseAssets(first: 1, name: "excalibur.min.js") {
                    edges {
                      node {
                        size
                      }
                    }
                  }
                }
              }
            }
          
            releases(first: 5, orderBy: { field: CREATED_AT, direction: DESC}) {
              edges {
                node {
                  publishedAt
                  name
                  tag {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      },
    },
  ],
}
