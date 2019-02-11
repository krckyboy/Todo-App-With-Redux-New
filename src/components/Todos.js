import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import Form from "./Form";
import {
  handleAddTodoAction,
  deleteTodoAction,
  toggleTodoAction,
  updateTodoAction
} from "../actions/todos";

class Todos extends Component {
  addTodo = text => {
    const { dispatch } = this.props;
    dispatch(handleAddTodoAction(text));
  };

  toggleTodo = id => {
    const { dispatch } = this.props;
    dispatch(toggleTodoAction(id));
  };

  deleteTodo = id => {
    const { dispatch } = this.props;
    dispatch(deleteTodoAction(id));
  };

  updateTodo = todo => {
    const { dispatch } = this.props;
    dispatch(updateTodoAction(todo));
  };

  render() {
    const { todos } = this.props;

    const todosComponents = todos.map(todo => (
      <Todo
        todo={todo}
        key={todo.id}
        toggleTodo={this.toggleTodo}
        deleteTodo={this.deleteTodo}
        updateTodo={this.updateTodo}
      />
    ));

    return (
      <main>
        <Form addTodo={this.addTodo} />
        <ol className="todosCont">
          {todosComponents ? todosComponents : null}
        </ol>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(Todos);
