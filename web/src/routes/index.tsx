import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import IsAuthenticated from './IsAuthenticated';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />

      <IsAuthenticated>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </IsAuthenticated>
    </Switch>
  </BrowserRouter>
);

export default Routes;
