import React from 'react'

import Logo from './logo'

const Footer = ({ googleGroupsUrl }) => (
  <footer className="ui segment inverted gray square">
    <div className="ui center aligned container">
      <h5 className="ui header inverted">Get Involved</h5>

      <div className="ui horizontal inverted link list">
        <a className="item" href="https://github.com/excaliburjs/Excalibur">
          GitHub Repo
        </a>
        <a
          className="item"
          href="https://github.com/excaliburjs/Excalibur/issues"
        >
          Open an Issue
        </a>
        <a className="item" href={googleGroupsUrl}>
          Ask a Question
        </a>
      </div>

      <div className="ui inverted section divider" />
      <Logo variant="medium" className="ui centered mini image" />
      <div className="ui horizontal small inverted divided link list">
        <a className="item" href="http://github.com/excaliburjs/Excalibur">
          Free &amp; Open Source (BSD 2-Clause)
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
