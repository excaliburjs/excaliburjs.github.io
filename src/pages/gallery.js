import React from 'react'
import Header from '../components/header'
import CardList from '../components/card-list'

import gallery from '../data/gallery'

const GalleryPage = () => (
  <>
    <Header />

    <div className="ui container">
      <h1 className="ui header">Gallery</h1>

      <p className="ui grey small header">
        These games were made using Excalibur, how cool is that?
      </p>

      <p>
        <a
          href="https://github.com/excaliburjs/excaliburjs.github.io"
          className="green ui button"
        >
          <i className="fork icon" /> Submit a pull request to add your game
          here!
        </a>
      </p>

      <div className="ui section divider" />

      <CardList items={gallery} />
      
      <div className="ui hidden divider" />
    </div>
  </>
)

export default GalleryPage
