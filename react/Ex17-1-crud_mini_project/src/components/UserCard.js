import React, { Component } from "react";
import "./app.css";

export default class UserCard extends Component {
  render() {
    console.log("here", this.props.user);
    return (
      <div className="card">
        <div>{this.props.user.name}</div>
        <img src={this.props.user.imageURL} alt={this.props.user.name} />
        <div className="btns-container">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}
