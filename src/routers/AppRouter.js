import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
