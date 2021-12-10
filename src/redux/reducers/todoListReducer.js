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
    default:
      return state;
  }
}
