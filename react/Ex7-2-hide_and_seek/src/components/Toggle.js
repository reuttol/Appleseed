import React from "react";

class Toggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {hide: false}
    }

    toggleBox = () =>{
        this.setState({hide: !(this.state.hide)})
    }

    render(){
        return (
            <div className={this.props.conatinerClass}>
                <button onClick={this.toggleBox}>show/hide</button>
                <div className={`${this.state.hide ? "box hide" : "box"}`}></div>
            </div>
        );
    }
}

export default Toggle;