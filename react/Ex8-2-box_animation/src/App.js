import React from "react";
import Box from "./components/Box";
import './App.css'

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Box height="100px" width="100px" />
        <Box height="150px" width="100px" />
        <Box height="50px" width="200px" />
      </div>
    );
  }
}

export default App;
