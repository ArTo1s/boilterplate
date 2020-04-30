import React from 'react';
import { Route, Switch } from 'react-router';
import AppContainer from './containers/App';

export const App = () => (
  <Switch>
    <Route path="/" component={AppContainer} />
  </Switch>
);
