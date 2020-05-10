import React from 'react'
import unified from 'unified'
import rehype2React from 'rehype-react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/header'
import Note from '../components/docs/Note'
import rehypeTypedoc from './rehype-typedoc'

/*
 * https://gist.github.com/mathewbyrne/1280286
 */
const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .trim() // Trim
}

const TOC = ({ toc, releases }) => (
  <div className="ui fluid vertical docs text menu">
    <div className="header item">User Guides</div>

    {toc.map(({ id, headings, frontmatter }) => (
      <React.Fragment key={id}>
        <Link
          exact
          activeClassName="active"
          className="item"
          to={frontmatter.path}
        >
          {frontmatter.title}
        </Link>
        {!!headings.length && (
          <div className="sub item">
            <div className="menu">
              {headings.map(heading => (
                <Link
                  key={heading.value}
                  className="item"
                  to={`${frontmatter.path}#${slugify(heading.value)}`}
                >
                  {heading.value}
                </Link>
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    ))}
    
    <a className="item" href="/examples">
      Examples
    </a>

    <div className="header item">API Reference</div>

    <a className="item" href="/docs/api/edge">
      Edge (latest)
    </a>

    {releases.map(release => (
      <a
        key={release.name}
        className="item"
        href={`/docs/api/${release.tag.name}`}
      >
        {release.name}
      </a>
    ))}
  </div>
)

export default function Template({ data }) {
  const { page, toc, releases, typedoc } = data
  const { frontmatter, htmlAst } = page
  const {
    edges: [
      {
        node: {
          internal: { content: typedocRaw },
        },
      },
    ],
  } = typedoc

  const docsProcessor = unified()
    .use(rehypeTypedoc, { basePath: '/docs/api/edge/', typedoc: JSON.parse(typedocRaw) })
    .use(rehype2React, {
      createElement: React.createElement,
      components: { 'docs-note': Note },
    })

  return (
    <Layout pageTitle={frontmatter.title}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"
        />
      </Helmet>
      <Header />

      <div className="ui page relaxed grid">
        <div className="four wide column">
          <TOC
            toc={toc.edges.map(e => e.node)}
            releases={releases.edges.map(r => r.node)}
          />
        </div>

        <div className="twelve wide column">
          <div className="ui left aligned container">
            <h1>{frontmatter.title}</h1>
            <div className="docs-content">
              {docsProcessor.stringify(docsProcessor.runSync(htmlAst))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    releases: allGithubReleases {
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

    toc: allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: ASC }) {
      edges {
        node {
          id
          headings {
            value
            depth
          }
          frontmatter {
            title
            path
          }
        }
      }
    }

    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
      }
    }

    typedoc: allTypedoc {
      edges {
        node {
          internal {
            content
          }
        }
      }
    }
  }
`
