import React from 'react'

import Header from '../components/header'
import Layout from '../components/layout'
import CardList from '../components/card-list'

import samples from '../data/samples'

const SamplesPage = () => (
  <Layout>
    <Header />

    <div className="ui container">
      <h1 className="ui header">Samples</h1>

      <p className="ui grey small header">
        Learn Excalibur by referencing these sample games.
      </p>

      <div className="ui section divider" />

      <CardList items={samples} />

      <div className="ui hidden divider" />
    </div>
  </Layout>
)

export default SamplesPage
