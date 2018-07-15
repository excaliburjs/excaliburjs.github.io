import React from 'react'

const CardList = ({ items }) => (
  <div className="ui cards">
    {items.map(({ image, title, description, url, source }) => (
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
)

export default CardList
