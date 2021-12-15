import React from "react";

class Box extends React.Component{
  state = {hide: ''}
    
  componentDidMount = () =>{
    setTimeout(()=>{
      this.setState({hide:'hide'})},4000);
  }
       
  render(){
    return (
      <div>
        <div style={{height: `${this.props.height}`, width: `${this.props.height}`}}
        className={`box ${this.state.hide}`}></div>
      </div>
    );
  }  
}

export default Box;