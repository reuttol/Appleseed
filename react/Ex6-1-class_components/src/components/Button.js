import React from "react";

class Button extends React.Component{
    render(){
        return <button className={this.props.addClass}>{this.props.title}</button>
    }
}

export default Button;