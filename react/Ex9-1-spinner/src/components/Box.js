import React from "react";
import './box.css'

class Box extends React.Component{
      
  render(){
    return (
      <div className={`${this.props.hide}`}>
        <div className="box"></div>
      </div>
    );
  }  
}

export default Box;