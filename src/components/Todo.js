import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodoToggle } from "../actions/todos";

class Todo extends Component {
  showEditInput = (e, id) => {
    const { dispatch } = this.props;
    if (e.target.className === "editIcon") {
      dispatch(editTodoToggle(id));
    }
  };

  updateTodo = (e, id) => {
    const { dispatch } = this.props;

    if (e.which === 13) {
      console.log("Pressed enter!");
      dispatch(editTodoToggle(id));
    }

    if (e.which === 27) {
      this.cancelUpdate(id);
    }
    // user clicks ok -> dispatch update and set editable: false
    // user clicks elsewhere -> editable: false
  };

  cancelUpdate = id => {
    const { dispatch } = this.props;
    console.log("Canceling!");
    dispatch(editTodoToggle(id));
  };

  onToggleClick = (e, id) => {
    if (e.target.className !== "del" && e.target.className !== "editIcon") {
      this.props.toggleTodo(id);
    }
  };

  render() {
    const { text, completed, id, editable } = this.props.todo;
    if (editable) {
      return (
        <li className="todo">
          <input
            autoFocus // This temporarily solves the problem with this.input.focus()
            type="text"
            className="editInput"
            defaultValue={text}
            ref={input => (this.input = input)}
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
