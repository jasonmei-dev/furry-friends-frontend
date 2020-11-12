import React from "react";
import PetCards from "../pets/PetCards";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <header className="showcase">
        <div className="showcase-content">
          <h1>Find Your New Furry Friend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem quos quod iusto, doloribus itaque.
          </p>
        </div>
      </header>
      <section className="cards">
        <div className="container">
          <PetCards />
        </div>
      </section>
    </div>
  );
};

export default Home;
