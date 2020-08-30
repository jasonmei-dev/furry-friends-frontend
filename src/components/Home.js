import React from "react";
import HomeCards from "../containers/HomeCards";
import Footer from "./Footer";
// import PetsContainer from '../containers/PetsContainer';

const Home = () => {
  return (
    <div id="home" className="Home">
      <header className="showcase">
        <div className="showcase-content">
          <h1>Find Your New Furry Friend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem quos quod iusto, doloribus itaque.
          </p>
        </div>
      </header>
      <section className="home-cards">
        <div className="container">
          <HomeCards />
        </div>
      </section>
    </div>
  );
};

export default Home;
