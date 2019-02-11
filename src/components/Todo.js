import React, { Component } from "react";
import { connect } from "react-redux";

class Todo extends Component {
  state = {
    editable: false,
    textToUpdate: this.props.todo.text,
    toggleable: true
  };

  updateText = e => {
    const text = e.target.value;
    this.setState({ textToUpdate: text });
  };

  updateTodo = (e, id) => {
    const { todo, updateTodo } = this.props;
    const { textToUpdate } = this.state;
    // User presses enter
    if (e.which === 13) {
      // If the text is the same as initial todo
      if (this.state.textToUpdate.trim() === todo.text.trim()) {
        this.doneEditing();
        return;
      } else {
        updateTodo({ ...todo, text: textToUpdate });
        this.doneEditing();
      }
    }
    // User presses escape
    if (e.which === 27) {
      this.doneEditing();
      return;
    }
  };

  toggleableOn = () => this.setState({ toggleable: true });
  toggleableOff = () => this.setState({ toggleable: false });
  editableOn = () => this.setState({ editable: true });
  editableOff = () => this.setState({ editable: false });
  doneEditing = () => {
    this.editableOff();
    this.toggleableOn();
  };
  enterEditing = () => {
    this.toggleableOff();
    this.editableOn();
  };

  showEditInput = (e, id) => {
    if (e.target.className === "editIcon") {
      this.enterEditing();
    }
  };

  onToggleClick = (e, id) => {
    if (e.target.className !== "del" && e.target.className !== "editIcon") {
      if (this.state.toggleable) {
        this.props.toggleTodo(id);
      }
    }
  };

  render() {
    const { text, completed, id } = this.props.todo;
    const { editable } = this.state;

    if (editable) {
      return (
        <li className="todo" style={{ paddingRight: "0" }}>
          <input
            autoFocus
            type="text"
            className="editInput"
            defaultValue={text}
            onBlur={this.doneEditing}
            onChange={this.updateText}
            onKeyDown={e => this.updateTodo(e, id)}
          />
        </li>
      );
    }
    return (
      <li className="todo" onClick={e => this.onToggleClick(e, id)}>
        <span className={completed ? "completed" : null}>{text}</span>
        <img
          src="https://uploads.codesandbox.io/uploads/user/ce6cf91c-c47e-4a6e-beb8-3272eae36bb0/0fXE-edit.png"
          alt="edit"
          className="editIcon"
          onClick={e => this.showEditInput(e, id)}
        />
        <button onClick={() => this.props.deleteTodo(id)} className="del">
          X
        </button>
      </li>
    );
  }
}

export default connect()(Todo);
