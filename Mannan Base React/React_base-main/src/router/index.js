import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
// import { Provider } from 'react-redux'
import { publicRoutes, privateRoutes } from './routerConfig'
import { PublicRoute, PrivateRoutes } from './routes'

import ErrorBoundary from "./ErrorBoundary";
import { StateProvider } from '../redux/store'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Loader from 'components/shared/loader/Loader'
import ConfirmDialog from 'components/shared/common-dialog'

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA3F3F"
    },
    secondary: {
      main: "#262933"
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Poppins", "sans-serif"].join(",")
  }
});

const Main = () => {
  const history = createHistory()
  history.listen(_=> {
    window.scrollTo(0,0)
  })

  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <Loader />
        <ConfirmDialog />
        <Router history={history}>
          <ErrorBoundary>
            <Switch>
              {privateRoutes.map(privateRouteProps => (
                <PrivateRoutes {...privateRouteProps} />
              ))}
              {publicRoutes.map(publicRouteProps => (
                <PublicRoute {...publicRouteProps} />
              ))}
              <Route render={ () => <Redirect to={{pathname: '/'}} /> } />
            </Switch>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>   
    </StateProvider>
  )
}

export default Main