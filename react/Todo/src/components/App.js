import React, { Component } from "react";
import TodoRow from "./TodoRow";
import NewRow from "./NewRow";
import "./app.css";

export default class App extends Component {
  state = { todoRows: [], show: false, idCount: 0 };

  handlePlusClick = () => {
    this.setState({ show: true });
  };

  handleRowAddClick = (value) => {
    const rows = this.state.todoRows;
    const tempID = this.state.idCount;
    rows.push(
      <NewRow todoContent={value} deleteRow={this.deleteRow} id={tempID} />
    );
    this.setState({
      todoRows: rows,
      show: false,
      idCount: tempID + 1,
    });
  };

  deleteRow = (id) => {
    this.setState((prevState) => ({
      todoRows: prevState.todoRows.filter((row) => row.props.id !== id),
    }));
  };

  render() {
    return (
      <div className="app">
        <div className="header-container">
          <h4>Todo List</h4>
          <button onClick={this.handlePlusClick}>+</button>
        </div>
        <div className="todo-list">{this.state.todoRows}</div>
        {this.state.show && <TodoRow click={this.handleRowAddClick} />}
      </div>
    );
  }
}
