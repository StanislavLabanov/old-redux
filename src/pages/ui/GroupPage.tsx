import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/hooks/use-app-selector';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { GroupContactsDto } from 'src/app/types/dto/GroupContactsDto';

export const GroupPage: FC = () => {
  const { contacts: contactsMass, groupContacts: groupContactsMass } = useAppSelector(state => state.reducer.contactsReducer)
  const { groupId } = useParams<{ groupId: string }>()
  const [contacts, setContacts] = useState<ContactDto[]>([])
  const [group, setGroup] = useState<GroupContactsDto>();

  useEffect(() => {
    const findGroup = groupContactsMass.find(({ id }) => id === groupId);
    setGroup(findGroup);
    setContacts(() => {
      if (findGroup) {
        return contactsMass.filter(({ id }) => findGroup.contactIds.includes(id))
      }
      return [];
    });
  }, [groupId]);

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
                {contacts.map((contact) => (
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
}
