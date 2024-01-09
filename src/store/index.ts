import { combineReducers, createStore } from "redux";
import { reducers } from "./reducers";

export const store = createStore(combineReducers({
   reducer: reducers
}))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch