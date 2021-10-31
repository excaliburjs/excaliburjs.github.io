import React from 'react'
import filesize from 'filesize'
import { graphql } from 'gatsby'
import { format } from 'date-fns'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Logo from '../components/logo'

import heroKingdom from '../assets/images/hero.png'
import heroTypeScript from '../assets/images/homepage-typescript.png'
import heroDocs from '../assets/images/homepage-docs.png'
import heroCrossPlatform from '../assets/images/homepage-xp.png'

import './index.css'

const selectRelease = (gh) => gh.data.repository.release.edges[0].node

const selectReleaseSize = (r) => filesize(r.releaseAssets.edges[0].node.size)

const IndexPage = ({ data: { github } }) => {
  const release = selectRelease(github)

  return (
    <Layout>
      <div className="ui segment blue inverted padded square homepage-hero">
        <div className="ui segment basic clearing">
          <div className="index-menu ui secondary inverted stackable massive menu">
            <Nav />
          </div>
        </div>

        <div className="ui segment basic padded">
          <Logo variant="hero" className="ui image centered" />
        </div>

        <img className="ui centered image" src={heroKingdom} alt="Kingdom" />

        <div className="ui huge header center aligned">
          An open-source 2D HTML5 game engine
        </div>

        <div className="ui segment blue inverted center aligned">
          <p>
            <a
              href="https://excaliburjs.com/docs/installation"
              className="ui button massive download"
            >
              Download {release.tag.name}
            </a>
          </p>
          <p>
            <a href={release.url}>
              View Release Notes (
              {format(new Date(release.publishedAt), 'MMM d, yyyy')})
            </a>{' '}
            &bull;{' '}
            <span className="size">{selectReleaseSize(release)} minified</span>
          </p>
        </div>
      </div>

      <div className="ui container">
        <div className="ui basic segment">
          <h1 className="ui centered header">
            Feature-Rich
            <span className="sub header">
              Tons of features to help build your game quickly
            </span>
          </h1>

          <table className="ui yellow large padded table">
            <tbody>
              <tr>
                <td>
                  <span role="img" aria-label="scene icon">
                    🎬
                  </span>{' '}
                  Scenes &amp; Actors
                </td>
                <td>
                  <span role="img" aria-label="camera icon">
                    🎥
                  </span>{' '}
                  Cameras
                </td>
                <td>
                  <span role="img" aria-label="audio icon">
                    🔉
                  </span>{' '}
                  Sounds &amp; Media
                </td>
                <td>
                  <span role="img" aria-label="paint icon">
                    🎨
                  </span>{' '}
                  Textures &amp; Sprites
                </td>
              </tr>
              <tr>
                <td>
                  <span role="img" aria-label="horse moving fast icon">
                    🏇
                  </span>{' '}
                  Sprite Animations
                </td>
                <td>
                  <span role="img" aria-label="nuclear icon">
                    ⚛️
                  </span>{' '}
                  Physics &amp; Collisions
                </td>
                <td>
                  <span role="img" aria-label="gamepad icon">
                    🎮
                  </span>{' '}
                  Gamepad &amp; Touch Support
                </td>
                <td>
                  <span role="img" aria-label="keyboard icon">
                    ⌨️
                  </span>{' '}
                  Mouse &amp; Keyboard Support
                </td>
              </tr>
              <tr>
                <td>
                  <span role="img" aria-label="chain icon">
                    🔗
                  </span>{' '}
                  Fluent Action API
                </td>
                <td>
                  <span role="img" aria-label="world icon">
                    🌎
                  </span>{' '}
                  Tile Maps (w/
                  <a href="https://github.com/excaliburjs/excalibur-tiled">
                    Tiled support
                  </a>
                  )
                </td>
                <td>
                  <span role="img" aria-label="math icon">
                    ➗
                  </span>{' '}
                  Math &amp; Algebra
                </td>
                <td>
                  <span role="img" aria-label="easing icon">
                    📈
                  </span>{' '}
                  Easing Functions
                </td>
              </tr>
              <tr>
                <td>
                  <span role="img" aria-label="timer icon">
                    ⏲️
                  </span>{' '}
                  Timers
                </td>
                <td>
                  <span role="img" aria-label="shiny star icon">
                    🌟
                  </span>{' '}
                  Sprite Effects
                </td>
                <td>
                  <span role="img" aria-label="particle icon">
                    🎇
                  </span>{' '}
                  Particles
                </td>
                <td>
                  <span role="img" aria-label="box icon">
                    📦
                  </span>{' '}
                  Cross-Platform
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="center aligned" colSpan="4">
                  <a
                    href="https://github.com/excaliburjs/Excalibur/milestones"
                    className="ui yellow small basic button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View upcoming releases
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>

          <p className="ui basic center aligned very padded segment">
            <a
              href="https://excaliburjs.com/docs"
              className="ui button massive primary"
            >
              <Logo variant="medium" className="ui mini middle aligned image" />
              Go make a game!
              <Logo variant="medium" className="ui mini middle aligned image" />
            </a>
          </p>
        </div>
      </div>

      <div className="ui teal inverted square segment homepage-callout">
        <div className="ui container">
          <div className="ui stackable grid">
            <div className="two column row">
              <div className="column">
                <div className="ui teal inverted large basic segment">
                  <h2 className="ui header">Made with TypeScript</h2>

                  <p>
                    Excalibur was built from the ground up for TypeScript, a
                    typed superset of JavaScript that feels familiar to C#,
                    Java, and other strongly-typed languages. This makes
                    Excalibur code clean, readable, and maintainable.
                  </p>
                </div>

                <p className="ui basic segment">
                  <a
                    href="https://www.typescriptlang.org"
                    target="_blank"
                    className="ui button white inverted"
                    rel="noopener noreferrer"
                  >
                    Learn more about TypeScript
                  </a>
                </p>
              </div>
              <div className="column">
                <img
                  className="ui fluid image"
                  src={heroTypeScript}
                  title="TypeScript"
                  alt="TypeScript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui blue inverted square segment homepage-callout">
        <div className="ui container">
          <div className="ui stackable grid">
            <div className="two column row">
              <div className="column">
                <img
                  className="ui fluid image"
                  src={heroDocs}
                  alt="Documentation"
                />
              </div>
              <div className="column">
                <div className="ui blue inverted large basic segment">
                  <h2 className="ui header">Extensive Documentation</h2>

                  <p>
                    Excalibur has a fully-documented API reference that is
                    automatically kept up-to-date with every version, including
                    the <code>main</code> code branch.
                  </p>
                </div>

                <p className="ui basic segment">
                  <a
                    href="https://excaliburjs.com/docs"
                    target="_blank"
                    className="ui white inverted button"
                    rel="noopener noreferrer"
                  >
                    Check out the docs
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui square segment homepage-callout">
        <div className="ui container">
          <div className="ui stackable grid">
            <div className="two column row">
              <div className="column">
                <div className="ui large basic segment">
                  <h2 className="ui header">Designed for Cross-Platform</h2>

                  <p>
                    Excalibur games compile to modern JavaScript and therefore
                    work in the majority of browsers, including mobile. Since
                    Excalibur games are "just JavaScript", you can use native
                    app packaging wrappers like{' '}
                    <a
                      href="https://cordova.apache.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apache Cordova
                    </a>
                    ,{' '}
                    <a
                      href="https://docs.microsoft.com/en-us/windows/uwp/get-started/create-a-hello-world-app-js-uwp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Universal Windows Apps
                    </a>
                    , or{' '}
                    <a
                      href="https://www.electronjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Electron
                    </a>{' '}
                    to create cross-platform games.
                  </p>
                </div>
                <p className="ui basic segment">
                  <a
                    href="https://excaliburjs.com/docs/installation#example-project-templates"
                    target="_blank"
                    className="ui primary inverted button"
                    rel="noopener noreferrer"
                  >
                    View starter templates
                  </a>
                </p>
              </div>
              <div className="center align column">
                <img
                  className="ui fluid image"
                  src={heroCrossPlatform}
                  alt="Cross Platform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    github: githubData {
      data {
        repository {
          release: latestRelease {
            edges {
              node {
                tag {
                  name
                }
                url
                publishedAt
                releaseAssets {
                  edges {
                    node {
                      size
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
