import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { store } from 'src/store';

export const FavoritListPage: FC = observer(() => {
  const { contacts, favoriteContacts } = store
  const [contactsState, setContactsState] = useState<ContactDto[]>([])

  useEffect(() => {
    setContactsState(() => contacts.filter(({ id }) => favoriteContacts.includes(id)));
  }, [contacts, favoriteContacts])

  return (
    <Row xxl={4} className="g-4">
      {
        contactsState.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))
      }
    </Row>
  )
})
