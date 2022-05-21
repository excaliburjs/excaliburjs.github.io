import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import CardList from '../components/card-list'

import gallery from '../data/gallery'

const DonatePage = () => (
  <Layout>
    <Header />

    <div className="ui container">
      <h1 className="ui header">Donate</h1>

      <div className="ui section divider" />

      <p className="ui grey small">
        Please consider a small donation on the following platforms!
      </p>

      <div className="sponsor-options">
        <a
          className="sponsor-button gh-sponsor"
          href="https://github.com/sponsors/eonarheim"
        >
          <p>Support Excalibur on GitHub Sponsor</p>
        </a>

        <a
          className="sponsor-button patreon"
          href="https://www.patreon.com/join/erikonarheim"
        >
          <p>Support Excalibur on Patreon</p>
        </a>
      </div>

      <p>Donations allow us to spend more time working on Excalibur!</p>

      <p>
        Excalibur is currently a labor of love and something we do outside of
        our day job, our goal is to one day fund part time or full time
        development.
      </p>

      <div className="ui hidden divider" />
    </div>
  </Layout>
)

export default DonatePage
