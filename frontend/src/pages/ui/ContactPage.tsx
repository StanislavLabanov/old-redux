import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/app/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { store } from 'src/store';

export const ContactPage: FC = observer(() => {
  const { contacts } = store
  const { contactId } = useParams<{ contactId: string }>();
  const [contactState, setContactState] = useState<ContactDto>();

  useEffect(() => {
    setContactState(() => contacts.find(({ id }) => id === contactId));
  }, [contactId, contacts]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contactState ? <ContactCard contact={contactState} /> : <Empty />}
      </Col>
    </Row>
  );
})