import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { store } from 'src/store';

export const ContactListPage: FC = observer(() => {
  const { contacts, groupContacts } = store
  const [contactsState, setContactsState] = useState(store.contacts)

  useEffect(() => {
    setContactsState(contacts)
  }, [contacts])

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1)
    }

    if (fv.groupId) {
      const groupContact = groupContacts.find(({ id }) => id === fv.groupId);

      if (groupContact) {
        findContacts = findContacts.filter(({ id }) => (
          groupContact.contactIds.includes(id)
        ))
      }
    }

    setContactsState(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {
            contactsState.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  )
})