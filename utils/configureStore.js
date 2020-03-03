import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../reducers";

export default function configureStore(initialState) {
  const middlewares = [reduxThunk];

  return createStore(reducers, initialState, applyMiddleware(...middlewares));
}
