import React from "react";
import {data} from '../data.js';
import Card from "./Card.js";
import Name from "./Name.js";

import './app.css'

class App extends React.Component{
    state = {data: data, allNames: [], bornBefore1990: []}

    getAllNames = () => {
        const names = this.state.data.map((person) => person.name);
        this.setState({allNames: names})
    }

    getBornBefore1990 = () => {
        const filtered = this.state.data.filter((person) => parseInt(person.birthday.split('-').slice(-1)[0]) < 1990);
        this.setState({bornBefore1990: filtered})
    }

    componentDidMount(){
        this.getAllNames();
        this.getBornBefore1990();
    }

    render(){
        return (
           <div className="app">
               <div className="names-container">
                    {this.state.allNames.map((person) => <Name name={person}/>)}
               </div>
               <div className="objects-container">
                    {this.state.bornBefore1990.map((personObj) => <Card person={personObj}/>)}
               </div>
               
           </div>
        );
    }
}

export default App;