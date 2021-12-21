import React from "react";

import './app.css'

class App extends React.Component{

    inputRef = React.createRef();

    componentDidMount(){
        this.inputRef.current.focus();        
    }

    render(){
        return (
           <div className="app">
               <label>Enter Your Name</label>
               <input ref={this.inputRef} type="text" />
           </div>
        );
    }
}

export default App;