import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as userReducer } from "./GetAllUsers/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
