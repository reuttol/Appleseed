import React from "react";
import './checkbox.css'

class CheckBox extends React.Component{
  state = {isChecked: this.props.isChecked, label: ''}

  onCheckboxCheck = (event) =>{
    this.setState({isChecked: event.target.checked})
  }

  render(){
    return (
      <div className="checkboxes-container">
        <input type="checkbox" checked={this.state.isChecked} onChange={this.onCheckboxCheck}/>
        <label for="">{this.props.label}</label>
      </div>
    );
  }  
}

export default CheckBox;