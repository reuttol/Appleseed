import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from 'axios';

import "./app.css";

export default class App extends Component {
  state = {users: []};

  async componentDidMount(){
    const res = await axios.get('https://61c40cf8f1af4a0017d99240.mockapi.io/reut-avatar/users');
    this.setState({users: res.data});
  }

  renderUsers = () => {
    return this.state.users.map((user=> <UserCard user={user}/>));
  }
  
  render() {
    return (
      <div className="app">
        {this.renderUsers()}
      </div>
    );
  }
}
