import React from "react";

class Color extends React.Component{
  state = {favoriteColor: 'purple'}
    
  componentDidMount = () =>{
    setTimeout(() => this.setState({favoriteColor:'pink'}),1000);
  }
    
  componentDidUpdate = () =>{
    document.querySelector('#box').innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }
    
  render(){
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="box"></div>
      </div>
    );
  }  
}

export default Color;