import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from '../pages/Signup';
import Login from '../pages/Login';

import IsAuthenticated from './IsAuthenticated';
import Users from '../components/Users';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />

      <IsAuthenticated>
        <Route path="/users">
          <Users />
        </Route>
      </IsAuthenticated>
    </Switch>
  </BrowserRouter>
);

export default Routes;
