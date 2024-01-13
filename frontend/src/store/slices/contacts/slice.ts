import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ContactDto } from "src/app/types/dto/ContactDto"
import { FavoriteContactsDto } from "src/app/types/dto/FavoriteContactsDto"
import { GroupContactsDto } from "src/app/types/dto/GroupContactsDto"

interface Props {
   contacts: ContactDto[]
   groupContacts: GroupContactsDto[]
   favoriteContacts: FavoriteContactsDto
}

const initialState: Props = {
   contacts: [],
   groupContacts: [],
   favoriteContacts: []
}

export const contactsSlice = createSlice({
   name: 'contacts-slice',
   initialState,
   reducers: {
      getContacts: (state, action: PayloadAction<ContactDto[]>) => {
         state.contacts = [...action.payload]
         state.favoriteContacts = [action.payload[0].id, action.payload[1].id, action.payload[2].id, action.payload[3].id]
      },
      getGroupContacts: (state, action: PayloadAction<GroupContactsDto[]>) => {
         state.groupContacts = [...action.payload]
      },
   }
})