import React from 'react'
import Header from '../components/header'

import groceriesImage from '../assets/images/showcase/groceries.png'
import hexshaperImage from '../assets/images/showcase/hexshaper.png'
import minotaurImage from '../assets/images/showcase/minotaur.png'
import sweepstacksImage from '../assets/images/showcase/sweepstacks.png'
import krakenImage from '../assets/images/showcase/kraken.png'

const gallery = [
  {
    title: 'I Just Wanted Groceries',
    image: groceriesImage,
    description:
      'This game was created for Ludum Dare 38. Avoid talking to people and finish your shopping!',
    url: 'http://excaliburjs.com/ludum-38/',
    source: 'https://github.com/excaliburjs/ludum-38',
  },
  {
    title: 'Hexshaper',
    image: hexshaperImage,
    description:
      'This game was created for Ludum Dare 35. Absorb enemy projectiles and close the portals!',
    url: 'http://excaliburjs.com/ludum-35/',
    source: 'https://github.com/excaliburjs/ludum-35',
  },
  {
    title: 'Crypt of the Minotaur',
    image: minotaurImage,
    description:
      'This game was created for Ludum Dare 33. Play as the Minotaur to defend your treasure!',
    url: 'http://excaliburjs.com/ludum-33/',
    source: 'https://github.com/excaliburjs/ludum-33',
  },
  {
    title: 'Sweep Stacks',
    image: sweepstacksImage,
    description:
      'This game was created for Ludum Dare 31. Sweep across the screen to clear blocks!',
    url: 'http://excaliburjs.com/sweep/',
    source: 'https://github.com/excaliburjs/sweep',
  },
  {
    title: 'Kraken Unchained',
    image: krakenImage,
    description:
      'This game was created for Ludum Dare 29. Play as the Kraken and destroy ships!',
    url: 'http://krakenunchained.azurewebsites.net',
    source: 'https://github.com/excaliburjs/Ludum-29',
  },
]

const GalleryPage = () => (
  <>
    <Header />

    <div className="ui container">
      <h1 className="ui header">Gallery</h1>

      <p className="ui grey small header">
        These are games made using Excalibur, how cool is that?
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

      <div className="ui cards">
        {gallery.map(({ image, title, description, url, source }) => (
          <div className="card" key={title}>
            <div className="image">
              <img src={image} alt={title} title={title} />
            </div>
            <div className="content">
              <h3 className="header">{title}</h3>

              <p className="description">{description}</p>
            </div>
            <div className="extra content">
              <a href={url}>Demo</a>
              {!!source && (
                <span className="right floated">
                  <a href={source}>
                    <i className="code icon" /> Code
                  </a>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="ui hidden divider" />
    </div>
  </>
)

export default GalleryPage
