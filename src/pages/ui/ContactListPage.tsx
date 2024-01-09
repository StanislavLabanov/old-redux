import { FC, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { useAppSelector } from 'src/hooks/use-app-selector';

export const ContactListPage: FC = () => {
  const { contacts: contactsMass, groupContacts: groupContactsMass } = useAppSelector(state => state.reducer.contactsReducer)
  const [contacts, setContacts] = useState(contactsMass)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsMass

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1)
    }

    if (fv.groupId) {
      const groupContacts = groupContactsMass.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }

    setContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {
            contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  )
}
