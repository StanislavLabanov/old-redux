import { Outlet, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { MainMenu } from './MainMenu';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from 'src/store';

export const Layout: FC = observer(() => {
  const { loadingContacts, loadingGroup } = store
  const location = useLocation();
  const pathNames = location.pathname.split('/').filter((x) => x);

  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Breadcrumbs pathNames={pathNames} />
        </Col>
        <Col xxl={12}>
          {loadingContacts || loadingGroup ? <div>Loading...</div> : <Outlet />}
        </Col>
        <Col xxl={12}>
          <footer>

          </footer>
        </Col>
      </Row>
    </Container>
  );
})
