import React from 'react';
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'


const { ConnectedRouter } = routerRedux;

const Routers = function ({ history }) {
  const routes = [
    {
      path: '/dashboard',
      component: () => import('./routes/HomePage/'),
    },
    {
      path: '/login',
      component: () => import('./routes/Login/'),
    },
  ];
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/login" />)} />
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
                   exact
                   path={path}
                   component={dynamic({
                     app,
                     ...dynamics,
                   })}
            />
          ))
        }
      </Switch>
    </ConnectedRouter>
  );
};

export default Routers;
