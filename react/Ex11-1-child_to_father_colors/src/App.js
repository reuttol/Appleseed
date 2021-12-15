import React from "react";
import Button from "./components/Button";
import './App.css'

class App extends React.Component {
  state = {color: ''}
  colors = ['red', 'yellow', 'blue'];

  onClick = (value) => this.setState({color: value});
  
  createButtons = () =>{
    return this.colors.map((color) =><Button color={color} onClick={this.onClick}/>);
  }

  render(){
    return (
      <div className="app-container">
        <h1>The color selected is: {this.state.color}</h1>
        {this.createButtons()}
      </div>
    );
  }
}

export default App;
