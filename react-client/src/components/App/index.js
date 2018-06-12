import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Todo from '../Todo';
import Trash from '../Todo/Trash';

const links = [
  {
    itemName: 'Tasks',
    itemLink: '/'
  },
  {
    itemName: 'Trash',
    itemLink: '/trash'
  }
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar navTitle="Todo" navItems={links} />
          <Route exact path="/" component={Todo} />
          <Route path="/trash" component={Trash} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
