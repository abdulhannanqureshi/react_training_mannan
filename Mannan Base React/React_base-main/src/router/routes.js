import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { store } from "../redux/store";

export const PublicRoute = props => {
  const { layout: PublicLayout, component: Component, ...restProps } = props
  const { token } = useContext(store).states.auth
  return (
    <Route 
      {...restProps}
      render={routeRenderProps => 
        !token ? (
          <PublicLayout {...routeRenderProps}>
            <Component {...routeRenderProps} />
          </PublicLayout>
        ) : (
          <Redirect 
            to={{
              pathname: '/',
              state: { from: routeRenderProps.location }
            }}
          />
        )
      }
    />
  )
}

export const PrivateRoutes = props => {
  const { token } = useContext(store).states.auth
  const stores = useContext(store)
  const { layout: PrivateLayout, component: Component, ...restProps } = props
  return (
    <Route 
      {...restProps}
      render={routeRenderProps =>
        token ? (
          <PrivateLayout {...routeRenderProps}>
              <Component {...routeRenderProps} stores={stores} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeRenderProps.location }
            }}
          />
        )
      }
    />
  )
}