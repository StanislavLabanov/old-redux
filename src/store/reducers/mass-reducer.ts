import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__"
import { ContactDto } from "src/app/types/dto/ContactDto"
import { FavoriteContactsDto } from "src/app/types/dto/FavoriteContactsDto"
import { GroupContactsDto } from "src/app/types/dto/GroupContactsDto"

interface Props {
   contacts: ContactDto[]
   groupContacts: GroupContactsDto[]
   favoriteContacts: FavoriteContactsDto
}

const initialState: Props = {
   contacts: DATA_CONTACT,
   groupContacts: DATA_GROUP_CONTACT,
   favoriteContacts: [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id]
}

export const massReducer = (state = initialState, action: any) => {
   switch (action.type) {
      default: return state
   }
}