import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import Footer from '../components/footer'
import GoogleAnalytics from '../components/ga'

import '../assets/ui/semantic.css'
import favicon from './favicon.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            {
              rel: 'icon',
              type: 'image/x-icon',
              href: favicon
            }
          ]}
          meta={[
            {
              name: 'description',
              content: 'Excalibur.js TypeScript HTML5 web game engine',
            },
            {
              name: 'keywords',
              content:
                'javascript, typescript, html5, game engine, gaming, games, engine',
            }
          ]}
        />

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
