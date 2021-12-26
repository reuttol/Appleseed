import React, { useState } from "react";

import CheckBox from "./CheckBox";

const originalData = ["one", "two", "three", "four", "five"];

const App = () => {
  const [data, setData] = useState([...originalData]);
  const [checked, setChecked] = useState(
    Array.from({ length: data.length }, (i) => false)
  );

  const deleteChecked = () => {
    const temp = data.filter((item, i) => !checked[i] && item);
    const tempChecked = checked.filter((item) => !item && !item);
    setData(temp);
    setChecked(tempChecked);
  };

  const reset = () => {
    setData([...originalData]);
    setChecked(Array.from({ length: data.length }, (i) => false));
  };

  const checkItem = (e, id) => {
    const temp = checked;
    temp[id] = e.target.checked;
    setChecked(temp);
  };

  return (
    <div>
      <button onClick={deleteChecked}>Delete</button>
      <button onClick={reset}>Reset</button>
      {data.map((item, i) => (
        <CheckBox key={item} text={item} id={i} isChecked={checkItem} />
      ))}
    </div>
  );
};

export default App;
