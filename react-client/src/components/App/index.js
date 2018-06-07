import React from 'react';
import Navbar from '../Navbar';

const links = [
  {
    itemName: 'uzu',
    itemLink: 'http://uzu.com'
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar navTitle="Todo" navItems={links} />
      </div>
    );
  }
}

export default App;
