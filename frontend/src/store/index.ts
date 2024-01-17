import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/app/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/app/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/app/types/dto/GroupContactsDto";

interface Props {
   contacts: ContactDto[]
   groupContacts: GroupContactsDto[]
   favoriteContacts: FavoriteContactsDto
   loadingContacts: boolean
   loadingGroup: boolean
   errorContacts: boolean
   errorGroup: boolean
   getContacts: () => void
   getGroupContacts: () => void
}


export const store = makeAutoObservable({
   contacts: [],
   groupContacts: [],
   favoriteContacts: [],
   loadingContacts: false,
   loadingGroup: false,
   errorContacts: false,
   errorGroup: false,

   *getContacts(): Generator {
      store.loadingContacts = true
      store.errorContacts = false
      try {
         yield fetch('http://localhost:3010/api/contacts')
            .then(res => res.json())
            .then((res: ContactDto[]) => {
               if (res) {
                  store.contacts = res
                  store.favoriteContacts = [res[0].id, res![1].id, res[2].id, res[3].id]
               }
            })
         store.loadingContacts = false
      } catch (e) {
         store.errorContacts = true
      }
   },

   *getGroupContacts(): Generator {
      store.errorGroup = false
      store.loadingGroup = true
      try {
         yield fetch('http://localhost:3010/api/groups')
            .then(res => res.json())
            .then((res: GroupContactsDto[]) => {
               if (res) store.groupContacts = res
            })
         store.loadingGroup = false
      } catch (e) {
         store.errorGroup = true
      }
   }
} as Props)