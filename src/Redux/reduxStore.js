import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './productReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  productState: productReducer,
});

export const ReduxStore = createStore(rootReducer, applyMiddleware(thunk));
