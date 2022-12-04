import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Footer from '../components/footer'
import GoogleAnalytics from '../components/ga'

import favicon from './favicon.png'

import '../assets/ui/prism.css'
import '../assets/ui/semantic.css'

export const Head = ({ data, pageContext }) => {
  return (
    <>
      <title>{`${pageContext.title ? pageContext.title + ' - ' : ''}${
        data.site.siteMetadata.title
      }`}</title>

      <meta
        name="description"
        content="Excalibur.js TypeScript HTML5 web game engine"
      />
      <meta
        name="keywords"
        content="javascript, typescript, html5, game engine, gaming, games, engine"
      />

      <link rel="icon" type="image/x-icon" href={favicon} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400italic"
      />
    </>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          discussionBoard
        }
      }
    }
  `)
  return (
    <>
      {children}

      <Footer discussionBoardUrl={data.site.siteMetadata.discussionBoard} />
      <GoogleAnalytics />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
