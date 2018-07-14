import React from 'react'

import Header from '../components/header'

import sampleExcalibird from '../assets/images/showcase/excalibird.png'
import sampleShmup from '../assets/images/showcase/shmup.png'
import sampleBreakout from '../assets/images/showcase/breakout.png'

const samples = [
  {
    title: 'Excalibird',
    image: sampleExcalibird,
    description:
      'This is a sample clone of the popular mobile game flappy bird.',
    url: 'http://excaliburjs.com/excalibird/',
    source: 'https://github.com/excaliburjs/excalibird',
  },
  {
    title: "Shoot 'Em Up",
    image: sampleShmup,
    description: "This is an example of how to create a Shoot 'Em Up game",
    url: '/samples/shmup',
    source: 'https://github.com/eonarheim/Excalibur-Shmup',
  },
  {
    title: 'Breakout',
    image: sampleBreakout,
    description: 'This is a sample brick breaking game.',
    url: 'http://jsfiddle.net/excaliburjs/6Ay9S/',
    source: 'https://github.com/excaliburjs/ExcaliburBreakout',
  },
]

const SamplesPage = () => (
  <>
    <Header />

    <div className="ui container">
      <h1 className="ui header">Samples</h1>

      <p className="ui grey small header">
        Learn Excalibur by referencing these sample games.
      </p>

      <div className="ui section divider" />

      <div className="ui cards">
        {samples.map(({ url, source, image, title, description }) => (
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

export default SamplesPage