import React, { useRef } from "react";
import "./app.css";

function App() {
  
  const videoRef = useRef();

  return (
    <div className="app">
      <div className="video">
        <video ref={videoRef}>
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="btns">
        <button onClick={()=>videoRef.current.play()}>Play</button>
        <button onClick={()=>videoRef.current.pause()}>Pause</button>
      </div>
    </div>
  );
}

export default App;
