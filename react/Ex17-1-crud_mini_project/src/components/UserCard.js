import React, { Component } from "react";
import "./app.css";

export default class UserCard extends Component {
  
  state = {value: this.props.user.name}
  
  render() {
    return (
      <div className="card">
        <div>{this.props.user.name}</div>
        <img src={this.props.user.imageURL} alt={this.props.user.name} />
        <div className="btns-container">
        <input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
          <button onClick={()=> this.props.handleEditClick(this.props.user.id, this.state.value)}>Edit</button>
          <button onClick={()=> this.props.handleDeleteClick(this.props.user.id)}>Delete</button>
        </div>
      </div>
    );
  }
}
