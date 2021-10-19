import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';
import UpdatePassword from './components/UpdatePassword';

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
        <UpdatePassword />
      </div>
    </ApolloProvider>
  );
}

export default App;
