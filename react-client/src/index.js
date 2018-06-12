import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store/';
import App from './components/App';
import './styles/index.scss';

const httpLink = new HttpLink({ uri: 'http://localhost:8080' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const history = createBrowserHistory();

const store = configureStore(history);

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
);
