import React, { useState, useEffect } from "react";
import axios from "axios";

import './app.css'

const baseURL = "https://restcountries.com/v2/";
const App = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      let suffix = "";
      if (term) {
        suffix = `name/${term}`;
      } else {
        suffix = `all/`;
      }
      const { data } = await axios.get(baseURL + suffix);

      const filtered = apiData.filter((country) => country.name.toLowerCase().includes(term));

      if(filtered.length)
        setFilteredData(filtered);
      else
        setFilteredData(data);

      setApiData(data);
    };

    getData();
  }, [term]);


  return (
    <div className="wrap">
      <div className="container">
        <label htmlFor="countrySearch">Search: </label>
        <input
          id="countrySearch"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <div className="countries">
        <div className="api-list">
          <div>API List:</div>
          <ul>
            {apiData.map((country) => (
              <li key={country.name}>{country.name}</li>
            ))}
          </ul>
        </div>
        <div className="filtered-list">
          <div>Filtered List:</div>
          <ul>
            {filteredData.map((country) => (
              <li key={country.name}>{country.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
