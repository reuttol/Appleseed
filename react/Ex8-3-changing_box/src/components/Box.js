import React from "react";

class Box extends React.Component{
  state = {backgroundColor: 'purple', count: 0, borderRadius: "0%"}

  randomize = (a) => Math.floor(Math.random() * a);  

  componentDidMount = () =>{
    setInterval(()=>{
      const r = this.randomize(255);
      const g = this.randomize(255);
      const b = this.randomize(255);
      this.setState({count : this.state.count+1});
      if(this.state.count > 5)
        this.setState({borderRadius: "100%"})
      this.setState({backgroundColor: `rgb(${r},${g},${b})`})
    }, 500);      
  }
       
  render(){
    return (
      <div>
        <div className="box" style={{backgroundColor: this.state.backgroundColor, borderRadius: this.state.borderRadius}}></div>
      </div>
    );
  }  
}

export default Box;