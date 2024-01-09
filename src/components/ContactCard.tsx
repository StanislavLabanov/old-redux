import { FC } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactDto } from 'src/app/types/dto/ContactDto';

interface ContactCardProps {
  contact: ContactDto,
  withLink?: boolean
}

export const ContactCard: FC<ContactCardProps> = ({ contact, withLink }) => {
  const { photo, id, name, phone, birthday, address } = contact

  return (
    <Card key={id}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>
          {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}
        </Card.Title>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <Link to={`tel:${phone}`} target="_blank">{phone}</Link>
            </ListGroup.Item>
            <ListGroup.Item>{birthday}</ListGroup.Item>
            <ListGroup.Item>{address}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card.Body>
    </Card>
  )
}
