import React, { useState, useEffect } from "react";
import axios from "axios";

import "./app.css";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [term, setTerm] = useState("hooks");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    (async ()=>{await getData()})();
  }, []);

  const getData = async () => {

    if (isSending) return;

    setIsSending(true);
    if (term.length) {
      try {
        const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`);
        setApiData(data.hits);
        console.log(data.hits);
      } catch (e) {
        console.log(e);
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div className="app">
      <input type="text" value={term} onChange={(event)=> setTerm(event.target.value)}/>
      <button onClick={getData}>Search</button>
      {isSending && <h4>Loading...</h4>}
      <ul>
        {
          apiData.map(hit => hit.url && <li key={hit.objectID}><a href={hit.url}>{hit.title}</a></li>)
        }
      </ul>
    </div>
  );
};

export default App;
