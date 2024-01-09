import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { useAppSelector } from 'src/hooks/use-app-selector';

export const GroupListPage: FC = () => {
  const groupContacts = useAppSelector(state => state.reducer.contactsReducer.groupContacts)

  return (
    <Row xxl={4}>
      {
        groupContacts.map((group) => (
          <Col key={group.id}>
            <GroupContactsCard group={group} withLink />
          </Col>
        ))
      }
    </Row>
  )
}
