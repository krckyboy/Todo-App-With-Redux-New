import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  TOGGLE_EDIT
} from "../actions/todos";

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id ? todo : { ...todo, completed: !todo.completed }
      );
    case TOGGLE_EDIT:
      return state.map(todo =>
        todo.id !== action.id ? todo : { ...todo, editable: !todo.editable }
      );
    case UPDATE_TODO:
      return {};
    default:
      return state;
  }
}
