import React from 'react';
import Navbar from '../Navbar';
import Todo from '../Todo';

const links = [
  {
    itemName: 'uzu',
    itemLink: 'http://uzu.com'
  }
];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar navTitle="Todo" navItems={links} />
        <Todo />
      </React.Fragment>
    );
  }
}

export default App;
