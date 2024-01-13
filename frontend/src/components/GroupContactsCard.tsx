import { memo } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GroupContactsDto } from 'src/app/types/dto/GroupContactsDto';

interface GroupContactsCardProps {
  group: GroupContactsDto,
  withLink?: boolean
}

export const GroupContactsCard = memo<GroupContactsCardProps>(({ group, withLink }) => {
  const { id, name, description, photo, contactIds } = group

  return (
    <Card key={id}>
      <Card.Header>
        {withLink ? <Link to={`/groups/${id}`}>{name}</Link> : name}
      </Card.Header>
      <Card.Body>{description}</Card.Body>
      <Card.Img variant="top" src={photo} />
      <Card.Footer>Contacts: {contactIds.length}</Card.Footer>
    </Card>
  );
}
)
