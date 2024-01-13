import { useEffect } from 'react';
import '../styles/MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage } from 'src/pages';
import { useContactsRequestQuery, useGroupsRequestQuery } from 'src/store/slices/contacts/api';
import { useAppDispatch } from 'src/hooks/use-app-dispatch';
import { getContacts, getGroupContacts } from 'src/store/slices/contacts';

export const MainApp = () => {
  const dispatch = useAppDispatch()
  const { data: contacts, isLoading, error } = useContactsRequestQuery()
  const { data: group, isLoading: isLoadingGroup, error: errorGroup } = useGroupsRequestQuery()

  useEffect(() => {
    contacts && dispatch(getContacts(contacts))
    group && dispatch(getGroupContacts(group))
  }, [contacts, group])

  return (
    <>
      {error || errorGroup && <div>Ошибка получения данных...</div>}
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout loading={isLoading || isLoadingGroup} />}>
              <Route index element={<ContactListPage />} />
              <Route path="contact">
                <Route index element={<ContactListPage />} />
                <Route path=":contactId" element={<ContactPage />} />
              </Route>
              <Route path="groups">
                <Route index element={<GroupListPage />} />
                <Route path=":groupId" element={<GroupPage />} />
              </Route>
              <Route path="favorit" element={<FavoritListPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
