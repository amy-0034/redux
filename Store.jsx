import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './Reducer';

export const store = createStore(tasksReducer, applyMiddleware(thunk));
