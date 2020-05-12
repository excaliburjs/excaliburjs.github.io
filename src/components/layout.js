import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import Footer from '../components/footer'
import GoogleAnalytics from '../components/ga'

import favicon from './favicon.png'

import '../assets/ui/prism.css'
import '../assets/ui/semantic.css'

const Layout = ({ pageTitle = '', children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            googleGroup
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{`${pageTitle ? pageTitle + ' - ' : ''}${
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
        </Helmet>

        {children}

        <Footer googleGroupsUrl={data.site.siteMetadata.googleGroup} />
        <GoogleAnalytics />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
