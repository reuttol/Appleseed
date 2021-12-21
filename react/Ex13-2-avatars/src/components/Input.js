import React from "react";
import './app.css'

const Input = (props) => {
  return <input value={props.userValue} onChange={props.handleInput} />;
};

export default Input;
