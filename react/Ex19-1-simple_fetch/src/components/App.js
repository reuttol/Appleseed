import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/");
      setApiData(data.results);
    };

    getData();
  }, []);

  return (
    <div>
      {apiData.map((film) => {
        return (
          <>
            <div>Tilte: {film.title}</div>
            <div>Producers: {film.producer}</div>
          </>
        );
      })}
    </div>
  );
};

export default App;
