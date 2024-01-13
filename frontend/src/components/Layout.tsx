import { Outlet, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { MainMenu } from './MainMenu';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { FC } from 'react';

interface Props {
  loading: boolean
}

export const Layout: FC<Props> = ({ loading }) => {
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
          {loading ? <div>Loading...</div> : <Outlet />}
        </Col>
        <Col xxl={12}>
          <footer>

          </footer>
        </Col>
      </Row>
    </Container>
  );
}
