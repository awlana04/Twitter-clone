import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

import Users from '../components/Users';
import Profile from '../pages/Profile';

import IsAuthenticated from './IsAuthenticated';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />

      <IsAuthenticated>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </IsAuthenticated>
    </Switch>
  </BrowserRouter>
);

export default Routes;
