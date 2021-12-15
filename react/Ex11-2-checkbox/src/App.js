import React from "react";
import CheckBox from "./components/CheckBox";
import './App.css'

class App extends React.Component {
  state = {}
  CheckBoxes = [ 
                       {label: "I read the terms of the app", isChecked: false}, 
                       {label: "I accept the terms of the app", isChecked: false}, 
                       {label: "I want to get the weekly news letter", isChecked: true},
                       {label: "I want to get sales and offers", isChecked: true}
                    ];


  createCheckBoxes = () =>{
    return this.CheckBoxes.map((checbox) =>
    < CheckBox label={checbox.label} isChecked={checbox.isChecked} />);
  }

  render(){
    return (
      <div className="app-container">
        {this.createCheckBoxes()}
      </div>
    );
  }
}

export default App;
