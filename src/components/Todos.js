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
  editTodo = () => {
    const { dispatch } = this.props;
  };

  render() {
    const { todos } = this.props;

    // For styles:
    // const todos = [
    //   { text: "My first todo", id: "1", completed: false },
    //   { text: "My second todo", id: "2", completed: false },
    //   { text: "My third todo", id: "3", completed: false },
    //   { text: "My fourth todo", id: "4", completed: false },
    //   {
    //     text:
    //       "My fifth amazing todo My fifth amazing todo My fifth amazing todo ",
    //     id: "5",
    //     completed: false
    //   },
    //   { text: "Learn this", id: "6", completed: false },
    //   { text: "Learn that", id: "7", completed: false }
    // ];

    const todosComponents = todos.map(todo => (
      <Todo
        todo={todo}
        key={todo.id}
        toggleTodo={this.toggleTodo}
        deleteTodo={this.deleteTodo}
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
