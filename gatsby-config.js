const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''

module.exports = {
  siteMetadata: {
    title: 'Excalibur.js HTML5 Game Engine',
    googleGroup: 'https://groups.google.com/forum/#!forum/excaliburjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `query { 
            repository(owner: "excaliburjs", name: "excalibur-dist") {
              releases(last: 1) {
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
        ],
      },
    },
  ],
}
