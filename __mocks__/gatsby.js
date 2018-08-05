'use strict'
import React from 'react'
const gatsby = jest.genMockFromModule('gatsby')
gatsby.Link = ({ to, activeClassName, activeStyle, isActive, ...props }) => (
  <a
    href={to}
    activeclassname={activeClassName}
    activestyle={activeStyle}
    isactive={isActive}
    {...props}
  />
)
module.exports = gatsby
