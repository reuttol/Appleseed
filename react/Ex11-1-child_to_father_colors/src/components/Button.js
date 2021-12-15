import React from "react";
import './button.css'

class Button extends React.Component{
  onButtonClick = (event) =>{
    this.props.onClick(event.target.innerText);
  }
  render(){
    return (
      <div className="buttons-container">
        <button className={`button ${this.props.color}`} onClick={this.onButtonClick}>{this.props.color}</button>
      </div>
    );
  }  
}

export default Button;