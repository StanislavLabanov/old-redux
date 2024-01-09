import { FC } from 'react';
import { Toast } from 'react-bootstrap';

export const Empty: FC = () => {
  return (
    <Toast bg={'danger'}>
      <Toast.Header closeButton={false}>
        Empty
      </Toast.Header>
      <Toast.Body>
        Data not found
      </Toast.Body>
    </Toast>
  );
}
