import { generateId } from "../utils";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function handleAddTodoAction(text) {
  return dispatch => {
    const newTodo = {
      completed: false,
      id: generateId(),
      text
    };
    dispatch(addTodoAction(newTodo));
  };
}

export function deleteTodoAction(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function updateTodoAction(todo) {
  return {
    type: UPDATE_TODO,
    todo
  };
}

// 1. User starts editing a todo
// Set redux state to EDITING (it would be a global editing flag / state)
// Pass the function for STOP EDITING for that component to be invoked in step 2
// 2. User starts editing another todo
// Global state is already set to editing, so if that's the case,
// run the function for STOP EDITING for the todo in the step 1,
// which is stored in the Redux store
