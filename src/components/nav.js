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
      href="https://groups.google.com/forum/#!forum/excaliburjs"
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
  </>
)

export default Nav
