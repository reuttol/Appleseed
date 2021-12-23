import React from "react";
import "./app.css";

class NewRow extends React.Component {
  state = { display: false, id: this.props.id, content: this.props.todoContent, edit: false};

  hide = () => {
    this.setState({ display: false });
  };

  show = () => {
    this.setState({ display: true });
  };

  editRow = () => {
    this.setState({ edit: true });
  };

  saveEdit = () => {
    this.setState({ edit: false });
  }

  render() {
    return (
      <div
        className="new-row-container"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
        <div className={`editable ${this.state.edit && "hidden"}`}>
          <div>{this.state.content}</div>
          <div className={`buttons-container ${this.state.display && "show"}`}>
          {/*  */}
            <button onClick={this.editRow}>Edit</button>
            <button onClick={() => this.props.deleteRow(this.state.id)}>
              Delete
            </button>
          </div>
        </div>
        <div className={`editable ${!this.state.edit && "hidden"}`}>
            <input
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
            /> 
            <button onClick={this.saveEdit}>
              Save
            </button>
        </div>
      </div>
    );
  }
}

export default NewRow;
