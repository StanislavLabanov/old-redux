import { contactsApi, groupsApi } from "./api";
import { contactsSlice } from "./slice";

export const contactsReducer = contactsSlice.reducer

export const { getContacts, getGroupContacts } = contactsSlice.actions

export const contactsApiMiddleware = contactsApi.middleware
export const groupsApiMiddleware = groupsApi.middleware

export const contactsApiReducer = contactsApi.reducer
export const groupsApiReducer = groupsApi.reducer

export const contactsApiReducerPath = contactsApi.reducerPath
export const groupsApiReducerPath = groupsApi.reducerPath