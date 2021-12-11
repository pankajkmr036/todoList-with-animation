import {ADD_TODO, DELETE_TODO} from '../constants/todoConstants';

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const initialState = [
  {id: 0, text: 'Complete 10 Pushups', completed: true, due: '10 Aug 2021'},
  {
    id: 1,
    text: 'Interview schedule for mike',
    completed: false,
    due: '12 Aug 2021',
  },
  {id: 2, text: 'Party at Jason house', completed: false, due: '14 Aug 2021'},
];

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.text,
          due: action.payload.due,
          completed: false,
        },
      ];

    case DELETE_TODO:
      return [...state.filter(x => x.id !== action.payload.id)];
    default:
      return state;
  }
}
