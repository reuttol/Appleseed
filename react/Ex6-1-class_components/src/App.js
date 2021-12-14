import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Button title="Important" addClass="bold"></Button>
        <Button title="Not Important" addClass=""></Button>
      </div>
    );
  }
}

export default App;
