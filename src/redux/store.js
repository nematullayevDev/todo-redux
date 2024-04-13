import { composeWithDevTools } from "@redux-devtools/extension";
import { todoReducer } from "./todoReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer
});
 
export const store = createStore(rootReducer, composeWithDevTools());
