import { generateId } from "../utils";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_EDIT = "TOGGLE_EDIT";

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
      editable: false,
      text
    };
    dispatch(addTodoAction(newTodo));
  };
}

export function editTodoToggle(id) {
  return {
    type: TOGGLE_EDIT,
    id
  };
}

export function handleEditTodoToggle(id, cb) {
  return dispatch => {
    dispatch(editTodoToggle(id));
    cb();
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
