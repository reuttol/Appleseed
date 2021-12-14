import React from "react";

class IncAndDec extends React.Component{
    constructor(props){
        super(props);

        this.state = {inputValue: 0, textColor: 'black'}
    }
    increment=()=>{
        if(this.state.inputValue < 10){
            this.setState({inputValue: this.state.inputValue+1}, this.changeColor);
        }
    }
    decrement=()=>{
        if(this.state.inputValue > -10){
            this.setState({inputValue: this.state.inputValue-1}, this.changeColor);
        }
    }
    changeColor = () =>{
        if(this.state.inputValue > 0)
            this.setState({textColor: 'green'});
        else if(this.state.inputValue < 0)
            this.setState({textColor: 'red'});
        else
            this.setState({textColor: 'black'});
    }
    render(){
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <input type="text" value={this.state.inputValue} className={this.state.textColor}
                // style={{ color: `${this.state.textColor}` }}
                />
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );

    }
}

export default IncAndDec;