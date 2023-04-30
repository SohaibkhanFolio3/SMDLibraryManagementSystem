import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
const rootReducer = combineReducers({ ...reducers });

const store = createStore(rootReducer, applyMiddleware(thunk));

export const actionWrapper = (type, payload) => ({ type, payload });
export default store;
