import {ADD_TODO} from '../constants/todoConstants';

export const addTodo = ({text, due}) => ({
  type: ADD_TODO,
  payload: {
    text,
    due,
  },
});
