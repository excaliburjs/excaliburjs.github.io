import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <>
    <a className="item" href="http://docs.excaliburjs.com">
      Docs
    </a>
    <Link className="item" to="/samples">
      Samples
    </Link>
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
