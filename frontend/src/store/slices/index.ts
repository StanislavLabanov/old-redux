import { combineReducers } from "redux";
import { contactsApiReducer, contactsApiReducerPath, contactsReducer, groupsApiReducer, groupsApiReducerPath } from "./contacts";

export const reducers = combineReducers({
   contacts: contactsReducer,
   [contactsApiReducerPath]: contactsApiReducer,
   [groupsApiReducerPath]: groupsApiReducer,
})