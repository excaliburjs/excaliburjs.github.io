import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <>
    <Link className="item" to="/docs">
      Docs
    </Link>
    <Link className="item" to="/samples">
      Samples
    </Link>
    <a
      className="item"
      href="https://github.com/excaliburjs/Excalibur/discussions"
    >
      Community
    </a>
    <Link className="item" to="/gallery">
      Gallery
    </Link>
    <a className="item" href="https://github.com/excaliburjs/Excalibur">
      Contribute
    </a>
    <a className="item" href="http://blog.excaliburjs.com">
      Blog
    </a>
    <Link className="item" to="/donate">
      Donate
    </Link>
  </>
)

export default Nav
