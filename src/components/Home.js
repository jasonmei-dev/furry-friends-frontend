import React from 'react';
import HomeCards from '../containers/HomeCards';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="Home">
      <HomeCards />
      <Link to="/pets">See more...</Link>
    </div>
  )
}


export default Home;
