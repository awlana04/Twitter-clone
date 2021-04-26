import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Users from './components/Users';

import './App.css';

const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
