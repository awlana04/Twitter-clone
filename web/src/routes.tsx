import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
