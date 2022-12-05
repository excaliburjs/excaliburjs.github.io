import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { DocSearch } from '@docsearch/react'

import Layout from '../components/layout'
import Header from '../components/header'
import Note from '../components/docs/Note'
import Example from '../components/docs/Example'
import IFrameEmbed from '../components/docs/IFrameEmbed'
import CodeSandboxEmbed from '../components/docs/CodeSandboxEmbed'

/**
 * Common shared template components to expose automatically
 * within the MDX files
 */
const shortcodes = { Link, Note, Example, IFrameEmbed, CodeSandboxEmbed }

const Toc = ({ toc: pages, releases }) => (
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
        <React.Fragment key={section}>
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
                    key={frontmatter.path}
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

export const Head = ({ data }) => (
  <>
    <title>{data.page.frontmatter.title}</title>
    <link rel="preconnect" href="https://IVI5ONIKWP-dsn.algolia.net" crossOrigin="true" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"
    />
  </>
)

export default function Template({ data, children }) {
  const {
    page,
    toc,
    github: {
      data: {
        repository: { releases },
      },
    },
  } = data
  const { frontmatter } = page

  return (
    <Layout>
      <Header />

      <div className="ui page stackable relaxed grid">
        <div className="four wide column">
          <Search />

          <Toc
            toc={toc.edges.map((e) => e.node)}
            releases={releases.edges.map((r) => r.node)}
          />
        </div>

        <div className="twelve wide column">
          <div className="ui left aligned container">
            <h1>{frontmatter.title}</h1>
            <div id="docs-content" className="docs-content">
              <MDXProvider components={shortcodes}>
              {children}
              </MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query DocsByPath($id: String!) {
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

    toc: allMdx(sort: { internal: { contentFilePath: ASC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            section
          }
        }
      }
    }

    page: mdx(id: { eq: $id }) {
      body
      frontmatter {
        path
        title
        section
      }
    }
  }
`
