import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./components/Home";
import SearchBar from "./components/Search";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((response) => setBeers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
