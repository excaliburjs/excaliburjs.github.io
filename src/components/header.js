import React from 'react'
import { Link } from 'gatsby'

import Nav from './nav'
import Logo from './logo'

const Header = () => (
  <div className="ui container">
    <div className="ui basic text large menu">
      <Link className="item" to="/">
        <Logo variant="small" className="ui vertical aligned image" />
      </Link>
      <Nav />
    </div>
  </div>
)

export default Header
