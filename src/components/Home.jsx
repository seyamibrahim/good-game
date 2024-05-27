import React from "react";
import "./Home.css";

const Home = ({ beer }) => (
  <div className="beer-card">
    <img src={beer.image} alt={beer.name} />
    <h3>{beer.name}</h3>
    <p>{beer.description}</p>
  </div>
);

export default Home;
