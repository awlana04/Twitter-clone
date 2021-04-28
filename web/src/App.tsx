import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';
import client from './hooks/auth';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
