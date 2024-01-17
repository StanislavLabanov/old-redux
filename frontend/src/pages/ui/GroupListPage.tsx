import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { store } from 'src/store';

export const GroupListPage: FC = observer(() => {
  return (
    <Row xxl={4}>
      {
        store.groupContacts.map((group) => (
          <Col key={group.id}>
            <GroupContactsCard group={group} withLink />
          </Col>
        ))
      }
    </Row>
  )
})
