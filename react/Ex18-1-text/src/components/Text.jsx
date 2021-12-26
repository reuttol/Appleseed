import React, { useState } from "react";

import "./app.css";

const Text = ({ rawText, textLen }) => {
  const [maxLen, setMaxLen] = useState(textLen);
  const [text, setText] = useState(rawText);
  const [clicked, setClicked] = useState(false);

  const onButtonClick = () => {
    setClicked(!clicked);
    clicked ?  setMaxLen(textLen) : setMaxLen(text.length)
  };

  return <div className="container">
      <p>{text.slice(0, maxLen)}</p>
      {(text.length > textLen) && <button onClick={onButtonClick}>{clicked ? "< Show Less" : "Read More >"}</button>}
      </div>;
};

export default Text;
