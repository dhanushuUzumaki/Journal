import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <Link to="/todo">Todo App</Link>
  </div>
);

export default Home;
