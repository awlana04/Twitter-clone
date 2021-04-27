import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';

import Users from './components/Users';
import IsAuthenticated from './components/IsAuthenticated';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
