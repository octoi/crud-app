import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <CreateUser />
        <ListOfUsers />
      </div>
    </ApolloProvider>
  );
}

export default App;
