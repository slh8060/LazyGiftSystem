import React from 'react';
import {Route, Switch, Redirect, routerRedux} from 'dva/router';
import dynamic from 'dva/dynamic';

const {ConnectedRouter} = routerRedux;


function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/main',
      component: () => import('./routes/home'),
    },
    {
      path: '/login',
      component: () => import('./routes/login'),
    },

  ];
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
        {
          routes.map(({path, ...dynamics}, key) => (
            <Route
              key={key} exact path={path}
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
}

export default RouterConfig;
