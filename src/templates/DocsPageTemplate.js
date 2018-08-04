import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Note from '../components/docs/Note'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'docs-note': Note },
}).Compiler

const slugify = s => s.replace(/[^a-z0-9]/ig, "-").toLowerCase();

const TOC = ({ toc }) => (
  <div className="ui fluid secondary vertical pointing menu">
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
        {headings && (
          <div className="item">
            <div className="menu">
              {headings.map(heading => (
                <Link className="item" to={`${frontmatter.path}#${slugify(heading.value)}`}>
                  {heading.value}
                </Link>
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
)

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { page, toc } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst } = page
  return (
    <>
      <Header />

      <div className="ui centered grid">
        <div className="three wide column">
          <TOC toc={toc.edges.map(e => e.node)} />
        </div>

        <div className="eight wide column">
          <div className="ui left aligned container">
            <h1>{frontmatter.title}</h1>
            <div className="docs-content">{renderAst(htmlAst)}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query DocsByPath($path: String!) {
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
  }
`
