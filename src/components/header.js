import React from 'react'
import { Link } from 'gatsby'

import Nav from './nav'

import logo from '../assets/images/logo@0.25x.png'

const Header = () => (
  <div className="ui container">
    <div className="ui basic text large menu">
      <Link className="item" to="/">
        <img
          className="ui vertical aligned image"
          src={logo}
          alt="Excalibur.js Logo"
        />
      </Link>
      <Nav />
    </div>
  </div>
)

export default Header
