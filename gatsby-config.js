const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''

module.exports = {
  siteMetadata: {
    title: 'Excalibur.js HTML5 Game Engine',
    googleGroup: 'https://groups.google.com/forum/#!forum/excaliburjs',
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-source-typedoc',
      options: {
        src: [
          `${__dirname}/ex/edge/src/engine/index.ts`,
          `${__dirname}/ex/edge/src/engine/globals.d.ts`,
          `${__dirname}/ex/edge/src/engine/files.d.ts`,
          `${__dirname}/ex/edge/src/engine/excalibur.d.ts`,
        ],
        typedoc: {
          target: 'es5',
          mode: 'modules',
          experimentalDecorators: true,
          excludePrivate: true,
          tsconfig: `${__dirname}/ex/edge/src/engine/tsconfig.json`,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
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
          `gatsby-remark-prismjs`,
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `{ 
            repository(owner: "excaliburjs", name: "excalibur-dist") {
              latestRelease: releases(last: 1) {
                edges {
                  node {
                    tag {
                      name
                    }
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
            }
          }`,
          `{ 
            repository(owner: "excaliburjs", name: "excalibur-dist") {
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
          }`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-catch-links',
      options: {
        excludePattern: /^\/(examples|docs\/api)/i,
      },
    },
  ],
}
