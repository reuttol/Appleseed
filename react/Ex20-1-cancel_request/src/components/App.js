import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v2/all", {
          signal: controller.signal,
        });
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Hide Data" : "Show Data"}
      </button>
      {show && <MyComponent />}
    </div>
  );
}

export default App;
