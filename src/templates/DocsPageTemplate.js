import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { DocSearch } from '@docsearch/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'

import '@docsearch/react/style'

import Layout from '../components/layout'
import Header from '../components/header'
import Note from '../components/docs/Note'
import Example from '../components/docs/Example'

/**
 * Common shared template components to expose automatically
 * within the MDX files
 */
const shortcodes = { Link, Note, Example }

/*
 * https://gist.github.com/mathewbyrne/1280286
 */
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .trim() // Trim
}

const TOC = ({ toc, releases }) => (
  <div className="ui fluid vertical docs text menu">
    <div className="header item">User Guides</div>

    {toc.map(({ id, headings, frontmatter }) => (
      <React.Fragment key={id}>
        <Link activeClassName="active" className="item" to={frontmatter.path}>
          {frontmatter.title}
        </Link>
        {!!headings.length && (
          <div className="sub item">
            <div className="menu">
              {headings.map((heading, index) => (
                <Link
                  key={`${frontmatter.path}-${index}`}
                  data-heading-level={heading.depth}
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

    <a className="item" href="/examples/">
      Examples
    </a>

    <div className="header item">API Reference</div>

    <a className="item" href="/docs/api/edge/">
      Edge (latest)
    </a>

    {releases.map((release) => (
      <a
        key={release.tag.name}
        className="item"
        href={`/docs/api/${release.tag.name}/`}
      >
        {release.tag.name}
      </a>
    ))}
  </div>
)

const Search = () => (
  <div className="docs-search">
    <DocSearch
      apiKey="bbb7679ce1b7e6f26980984d864045d3"
      indexName="excaliburjs"
    />
  </div>
)

export default function Template({ data }) {
  const { page, toc, releases } = data
  const { frontmatter, body } = page

  return (
    <Layout pageTitle={frontmatter.title}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@docsearch/css@1.0.0-alpha.28"
        />
      </Helmet>
      <Header />

      <div className="ui page relaxed grid">
        <div className="four wide column">
          <Search />
          <TOC
            toc={toc.edges.map((e) => e.node)}
            releases={releases.edges.map((r) => r.node)}
          />
        </div>

        <div className="twelve wide column">
          <div className="ui left aligned container">
            <h1>{frontmatter.title}</h1>
            <div className="docs-content">
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
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

    toc: allMdx(sort: { fields: [fileAbsolutePath], order: ASC }) {
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

    page: mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
      }
    }
  }
`
