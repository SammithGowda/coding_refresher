import { createStore, combineReducers } from "redux";
import { signupreducer } from "./Sigup/Reducer";
import { loginreducer } from "./Login/Reducer";
export const rootreducer = combineReducers({
  login: loginreducer,
  signup: signupreducer,
});

export const store = createStore(rootreducer);
