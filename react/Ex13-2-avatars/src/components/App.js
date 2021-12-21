import React, { Component } from 'react';
import axios from 'axios';
import AvatarList from './AvatarList';
import Input from './Input';

export default class App extends Component {
  state = {avatars: [], value: ''};

  async componentDidMount(){
    await this.getData();
  }

  getData = async () =>{
    const res = await axios.get('https://randomuser.me/api/?results=10');
    const cleanData = res.data.results.map((e) => {
      return {name: `${e.name.first} ${e.name.last}`, image: e.picture.medium, id: e.login.uuid}
    });
    this.setState({avatars: cleanData, originalData: cleanData});
  }

  handleInput = (userValue) =>{
    this.setState({
        value: userValue.target.value, 
      });
  }
 
  render() {
    return (
      <div>
        <Input handleInput={this.handleInput} userValue={this.state.value}/>
        <AvatarList avatars={this.state.avatars} userValue={this.state.value}/>
      </div>
    )
  }
}

