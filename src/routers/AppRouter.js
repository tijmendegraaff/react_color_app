import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import PalettePage from '../pages/PalettePage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/palette/:id" component={PalettePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
