import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home';
import TodoApp from './Todo';
import NotFoundPage from './NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/todo" component={TodoApp} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
