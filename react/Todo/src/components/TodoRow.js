import React, { Component } from "react";

class TodoRow extends Component {
  state = { value: "" };

  handleClick = () => {
    this.props.click(this.state.value);
  }
  
  render() {
    return (
      <div className="row-container">
        <input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default TodoRow;
