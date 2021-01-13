import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import DashboardPage from './DashboardPage';
import AddComicsPage from './AddComicsPage';
import EditComicsPage from './EditComicsPage';

const AppRoutes: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} exact />
      <Route path="/add" component={AddComicsPage} />
      <Route path="/comics/:id" component={EditComicsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
