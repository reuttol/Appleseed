import React from "react";
import Increment from "./components/Increment";

class App extends React.Component {
  render(){
    return (
      <div>
        <Increment styleClass="container"/>
      </div>
    );
  }
}

export default App;
