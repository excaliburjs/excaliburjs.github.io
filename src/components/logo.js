import React from 'react'
import PropTypes from 'prop-types'

import logoSmall from '../assets/images/logo@0.25x.png'
import logoMedium from '../assets/images/icon@0.5x.png'
import logoHero from '../assets/images/logo-hero.png'

const Logo = ({ variant = 'small', ...props }) => {
  let logo
  switch (variant) {
    case 'small':
      logo = logoSmall
      break
    case 'medium':
      logo = logoMedium
      break
    case 'hero':
      logo = logoHero
      break
    default:
      logo = logoSmall
  }

  return (
    <img
      src={logo}
      alt="Excalibur.js logo"
      title="Excalibur.js logo"
      {...props}
    />
  )
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['small', 'medium', 'hero']),
}

export default Logo
