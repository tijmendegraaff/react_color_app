import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './helpers/apollo';

import './styles/styles.scss';

import AppRouter from './router/AppRouter';

const App = () => (
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
);

render(<App />, document.getElementById('app'));
