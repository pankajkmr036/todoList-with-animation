import {ADD_TODO, DELETE_TODO} from '../constants/todoConstants';

export const addTodo = ({text, due}) => ({
  type: ADD_TODO,
  payload: {
    text,
    due,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
