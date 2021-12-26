import React from "react";
import "./app.css";
const Row = ({ row: { name, completed }, row, onButtonClick }) => {
  const completedClass = completed ? "completed" : "";
  const completedIcon = completed ? "✔" : "❌";
  return (
    <div className={`container ${completedClass}`}>
      <p>{name}</p>
      <button onClick={() => onButtonClick(row)}>{completedIcon}</button>
    </div>
  );
};

export default Row;
