import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import configureStore from './store/';
import App from './components/App';
import './styles/index.scss';

const httpLink = new HttpLink({ uri: 'http://localhost:8080' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const store = configureStore();

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
);
