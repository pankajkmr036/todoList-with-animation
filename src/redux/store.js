import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import todoListReducers from './reducers/todoListReducer';

const rootReducer = combineReducers({
  todoList: todoListReducers,
});

const middleware = [];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
