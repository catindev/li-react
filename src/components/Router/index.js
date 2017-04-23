import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './config';

export default () => (
  <BrowserRouter>
    <div className="container-fluid">
      {routes.map(route => (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </div>
  </BrowserRouter>
);
