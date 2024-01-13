import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/app/types/dto/ContactDto'
import { GroupContactsDto } from 'src/app/types/dto/GroupContactsDto'

const baseUrl = 'http://localhost:3010/api'

export const contactsApi = createApi({
   reducerPath: 'contacts-api',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (build) => ({
      contactsRequest: build.query<ContactDto[], void>({
         query: () => ({
            url: '/contacts',
            method: 'GET'
         })
      })
   })
})

export const groupsApi = createApi({
   reducerPath: 'groups-api',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (build) => ({
      groupsRequest: build.query<GroupContactsDto[], void>({
         query: () => ({
            url: '/groups',
            method: 'GET'
         })
      })
   })
})

export const { useContactsRequestQuery } = contactsApi
export const { useGroupsRequestQuery } = groupsApi