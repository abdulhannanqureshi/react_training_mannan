import React from 'react'
import Header from '../shared/header'

export const PrivateLayout = ({ children }) => {
  const { history } = children.props

  return (
    <div id="wrapper">
      <Header history={history} />
      {children}
      footer
    </div>
  )
}

export const PublicLayout = ({ children }) => {
  const { history } = children.props

  return (
    <div id="wrapper">
      <Header history={history} />
      {children}
      footer
    </div>
  )
}