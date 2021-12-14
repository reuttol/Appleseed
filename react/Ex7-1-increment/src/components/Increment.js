import React from "react";

class Increment extends React.Component{
    constructor(props){
        super(props);

        this.state = {inputValue: 0}
    }

    inc = () =>{
        this.setState({inputValue: this.state.inputValue+1});
    }

    render(){
        return (
            <div className={this.props.styleClass}>
                <button onClick={this.inc}>Increment</button>
                {this.state.inputValue}
            </div>
        );
    }
}

export default Increment;