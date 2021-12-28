import React, { useState, useEffect, useRef } from "react";
import "./app.css";

function App() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  
  useEffect(() => {
    if(show)  
      inputRef.current.focus();
  }, [show]);

  const handleInput = () =>{
    setShow((show) => !show);
  }
  return (
    <div className="App">
      {!show && <button onClick={handleInput}>Edit</button>}
     
      {show && <>
        <input ref={inputRef} value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        <button onClick={() => setShow((show) => !show)}>Save</button>
      </>}
    </div>
  );
}

export default App;
