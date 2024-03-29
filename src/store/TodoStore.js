import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { TodoReducer } from "../reducers/TodoReducers";

const reducer = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

/**
 * Store for managing the application state.
 */
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;
