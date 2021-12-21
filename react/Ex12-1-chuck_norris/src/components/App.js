import React from "react";
import axios from 'axios';

import './app.css'

class App extends React.Component{
    state = {randomJoke: '', categories: [], categoryJoke : []}

    getRandomJoke = async () =>{
        const response = await axios.get('https://api.chucknorris.io/jokes/random', {});
        this.setState({randomJoke: response.data.value})
    }

    getCategories = async() =>{
        const response = await axios.get('https://api.chucknorris.io/jokes/categories', {});
        this.setState({categories: response.data})
    }

    getCategoryJoke = async (e) =>{
        const category = e.target.innerText;
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`, {});
        this.setState({categoryJoke: response.data.value})
    }

    async componentDidMount(){
        await this.getCategories();
        await this.getRandomJoke();
    }

    render(){
        return (
           <div className="app">
               <h2>Welcome to Chuck Norris Jokes Generator</h2>
               <button onClick={this.getRandomJoke}>Get Random Joke</button>
               <p>{this.state.randomJoke}</p>
               <div className="categories-container">
                    {this.state.categories.map((category) => {
                        return <button key={category} onClick={this.getCategoryJoke}>{category}</button>
                    })

                    }
               </div>
               <p>{this.state.categoryJoke}</p>
           </div>
        );
    }
}

export default App;