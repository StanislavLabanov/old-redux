import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MainMenu: FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/"><h1>Книга контактов</h1></Link>
        <Nav className="me-auto">
          <Link to="/groups">Группы</Link>
          <Link to="/favorit">Избранное</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
