import React, { useState } from "react";

const App = () => {
  const [times, setTimes] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const change = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    const temp = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    if(inputName === "seconds"){
      temp.seconds = value;
      temp.minutes = value/60;
      temp.hours = value/3600;
    }
    else if(inputName === "minutes"){
      temp.seconds = value*60;
      temp.minutes = value;
      temp.hours = value/60;
    }
    else{
      temp.seconds = value*3600;
      temp.minutes = value*60;
      temp.hours = value;
    }
    setTimes(temp);
  };

  return (
    <div>
      <label>Seconds</label>
      <input type="text" name="seconds" onChange={change} value={times.seconds}/>
      <label>Minutes</label>
      <input type="text" name="minutes" onChange={change} value={times.minutes}/>
      <label>Hours</label>
      <input type="text" name="hours" onChange={change} value={times.hours}/>
    </div>
  );
};

export default App;
