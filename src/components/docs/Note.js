import React from 'react'

export default ({ children, variant = "info" }) => <div className={`ui ${variant} message`}>{children}</div>
