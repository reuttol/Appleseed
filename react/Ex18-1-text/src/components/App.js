import React from "react";
import Text from "./Text";

const App = () => {
  return (
    <div>
      <Text
        rawText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dolor eget lorem congue convallis."
        }
        textLen={10}
      />
    </div>
  );
};

export default App;
