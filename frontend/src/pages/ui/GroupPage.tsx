import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { GroupContactsDto } from 'src/app/types/dto/GroupContactsDto';
import { store } from 'src/store';
import { observer } from 'mobx-react-lite';

export const GroupPage: FC = observer(() => {
  const { contacts, groupContacts } = store
  const { groupId } = useParams<{ groupId: string }>()
  const [contactsState, setContactsState] = useState<ContactDto[]>([])
  const [group, setGroup] = useState<GroupContactsDto>();

  useEffect(() => {
    const findGroup = groupContacts.find(({ id }) => id === groupId);
    setGroup(findGroup);
    setContactsState(() => {
      if (findGroup) {
        return contacts.filter(({ id }) => findGroup.contactIds.includes(id))
      }
      return [];
    });
  }, [groupId, contacts, groupContacts]);

  return (
    <Row className="g-4">
      {
        group
          ?
          <>
            <Col xxl={12}>
              <Row xxl={3}>
                <Col className="mx-auto">
                  <GroupContactsCard group={group} />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row xxl={4} className="g-4">
                {contactsState.map((contact) => (
                  <Col key={contact.id}>
                    <ContactCard contact={contact} withLink />
                  </Col>
                ))}
              </Row>
            </Col>
          </>
          : <Empty />
      }
    </Row>
  )
})
