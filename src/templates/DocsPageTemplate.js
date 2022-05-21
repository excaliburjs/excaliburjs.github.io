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

const TOC = ({ toc: pages, releases }) => (
  <div id="docs-toc" className="ui fluid vertical docs text menu">
    <a id="open-toc" className="ui button docs-open" href="#open-toc">
      <i className="hamburger icon"></i>{' '}
      <span className="toc-closed">Open</span> Table of Contents
    </a>

    <a className="ui button docs-close" href="#docs-content">
      <i className="hamburger icon"></i>{' '}
      <span className="toc-opened">Close</span> Table of Contents
    </a>

    <div id="user-guides" className="header item">
      Documentation
    </div>
    {(() => {
      const sections = {}
      for (let page of pages) {
        if (!sections[page.frontmatter.section]) {
          sections[page.frontmatter.section] = []
        }
        sections[page.frontmatter.section].push(page)
      }

      return Object.keys(sections).map((section) => (
        <React.Fragment>
          <section>
            <Link
              className="item active"
              style={{ fontSize: 1.2 + 'em' }}
              to={sections[section][0].frontmatter.path}
            >
              {section}
            </Link>
            <div className="sub item">
              <div className="menu">
                {sections[section].map(({ frontmatter }) => (
                  <Link
                    activeClassName="active"
                    className="item"
                    style={{ fontSize: 1.0 + 'em' }}
                    to={frontmatter.path}
                  >
                    {frontmatter.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </React.Fragment>
      ))
    })()}

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
      apiKey="f8e274d9f62a3088bb54ab80f766d740"
      appId="IVI5ONIKWP"
      indexName="excaliburjs"
    />
  </div>
)

export default function Template({ data }) {
  const {
    page,
    toc,
    github: {
      data: {
        repository: { releases },
      },
    },
  } = data
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

      <div className="ui page stackable relaxed grid">
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
            <div id="docs-content" className="docs-content">
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
    github: githubData {
      data {
        repository {
          releases {
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
            section
          }
        }
      }
    }

    page: mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        section
      }
    }
  }
`
