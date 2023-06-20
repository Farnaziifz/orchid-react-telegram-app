import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import ChatReducer from "./ChatReducer";
const reducers = combineReducers({
  app: AppReducer,
  chat: ChatReducer,
});

export default reducers;
