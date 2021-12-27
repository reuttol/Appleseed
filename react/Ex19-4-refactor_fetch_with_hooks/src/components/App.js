import React, { useEffect, useState } from "react";
import axios from "axios";

import "./app.css";

const App = () => {
  const [randomJoke, setRandomJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryJoke, setCategoryJoke] = useState([]);

  const getRandomJoke = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/random",
      {}
    );
    setRandomJoke(response.data.value);
  };

  const getCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories",
      {}
    );
    setCategories(response.data);
  };

  const getCategoryJoke = async (e) => {
    const category = e.target.innerText;
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`,
      {}
    );
    setCategoryJoke(response.data.value);
  };

  useEffect(() => {
    const getData = async () => {
      await getCategories();
      await getRandomJoke();
    }

    getData();
  }, [])

  return (
    <div className="app">
      <h2>Welcome to Chuck Norris Jokes Generator</h2>
      <button onClick={getRandomJoke}>Get Random Joke</button>
      <p>{randomJoke}</p>
      <div className="categories-container">
        {categories.map((category) => {
          return (
            <button key={category} onClick={getCategoryJoke}>
              {category}
            </button>
          );
        })}
      </div>
      <p>{categoryJoke}</p>
    </div>
  );
};

export default App;
