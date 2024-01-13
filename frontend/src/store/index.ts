import { configureStore } from '@reduxjs/toolkit'
import { reducers } from "./slices";
import { contactsApiMiddleware, groupsApiMiddleware } from './slices/contacts';

export const store = configureStore({
   reducer: reducers,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApiMiddleware, groupsApiMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch