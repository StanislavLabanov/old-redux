import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/hooks/use-app-selector';

export const FavoritListPage: FC = () => {
  const { contacts: contactsMass, favoriteContacts } = useAppSelector(state => state.contacts)
  const [contacts, setContacts] = useState<ContactDto[]>([])

  useEffect(() => {
    setContacts(() => contactsMass.filter(({ id }) => favoriteContacts.includes(id)));
  }, [contactsMass, favoriteContacts])

  return (
    <Row xxl={4} className="g-4">
      {
        contacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))
      }
    </Row>
  )
}
