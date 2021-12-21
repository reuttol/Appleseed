import React from "react";

import './app.css'

class App extends React.Component{

    textAreaRef = React.createRef();

    handleClick = () =>{
        const copy1 = this.textAreaRef.current.value;

        this.textAreaRef.current.select();
        document.execCommand("copy");

    }

    render(){
        return (
           <div className="app">
               <h2>What is the meaning of life?</h2>
               <textarea ref={this.textAreaRef} rows="4" cols="50" ></textarea>
               <button onClick={this.handleClick} >Copy</button>
           </div>
        );
    }
}

export default App;