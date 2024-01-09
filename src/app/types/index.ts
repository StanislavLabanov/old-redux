import { ContactDto } from "./dto/ContactDto"
import { FavoriteContactsDto } from "./dto/FavoriteContactsDto"
import { GroupContactsDto } from "./dto/GroupContactsDto"

export interface CommonPageProps {
   contactsState: ContactDto[],
   favoriteContactsState: FavoriteContactsDto,
   groupContactsState: GroupContactsDto[]
}
