import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MainMenu: FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/"><h1>Книга контактов</h1></Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/groups">Группы</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/favorit">Избранное</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
