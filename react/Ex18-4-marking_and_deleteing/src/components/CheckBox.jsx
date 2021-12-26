import React from "react";

const CheckBox = ({ text, id, isChecked }) => {
  return (
    <div>
      <input type="checkbox" onChange={(e) => isChecked(e, id)} />
      <label>{text}</label>
    </div>
  );
};

export default CheckBox;
