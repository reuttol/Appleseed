import React, { useRef } from "react";
import "./app.css";

const Image = ({ imgSource, alt }) => {
  const ContainerDivRef = useRef();

  return (
    <div className="bw"
      onMouseLeave={() => ContainerDivRef.current.className = "bw"}
      onMouseEnter={() => ContainerDivRef.current.className = ""}
      ref={ContainerDivRef}
    >
      <img src={imgSource} alt={alt} />
    </div>
  );
};

function App() {
  const imgs = [
    "https://picsum.photos/id/1011/367/267",
    "https://picsum.photos/id/1022/367/267",
  ];
  
  return (
    <div className="app">
      {imgs.map((img, i) => (
        <Image
          key={i}
          imgSource={img}
          alt={i}
        />
      ))}
    </div>
  );
}

export default App;
