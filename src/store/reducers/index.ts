import { combineReducers } from "redux";
import { massReducer } from "./mass-reducer";

export const reducers = combineReducers({
   contactsReducer: massReducer
})