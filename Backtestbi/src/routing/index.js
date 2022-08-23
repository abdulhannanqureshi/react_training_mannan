import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { publicRoutes } from './routerConfig';
import { Provider } from 'react-redux';
import store from '../redux/store';

const Routing = () => {
  const history = createHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={'...loading'}>
          <Switch>
            {publicRoutes.map(
              ({
                layout: LayoutComponent,
                component: Component,
                ...restProps
              }) => (
                <Route
                  {...restProps}
                  render={(routeRenderProps) => (
                    <LayoutComponent>
                      <Component {...routeRenderProps} />
                    </LayoutComponent>
                  )}
                />
              )
            )}
            <Route render={() => <Redirect to={{ pathname: '/' }} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
};

export default Routing;
