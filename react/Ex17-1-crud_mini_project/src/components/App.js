import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from 'axios';

import "./app.css";

export default class App extends Component {
  state = {users: []};

  getData = async () =>{
    const res = await axios.get('https://61c40cf8f1af4a0017d99240.mockapi.io/reut-avatar/users');
    this.setState({users: res.data});
  }

  async componentDidMount(){
    await this.getData();
  }

  delete = async (userID) =>{
    const res = await axios.delete(`https://61c40cf8f1af4a0017d99240.mockapi.io/reut-avatar/users/${userID}`);
    this.setState((prevState)=> ({
      users: prevState.users.filter(user => user.id !== userID)
    }));
  }

  edit = async(userID, userName) =>{
    const tempUsers = this.state.users;
    const user = tempUsers.filter(user => userID.id === userID);
    user.name = userName;
    await axios.put(`https://61c40cf8f1af4a0017d99240.mockapi.io/reut-avatar/users/${userID}`,{...user});
    await this.getData();
   
  }

  renderUsers = () => {
    return this.state.users.map((user=> <UserCard key={user.id} user={user} handleEditClick={this.edit} handleDeleteClick={this.delete}/>));
  }
  
  render() {
    return (
      <div className="app">
        {this.renderUsers()}
      </div>
    );
  }
}
