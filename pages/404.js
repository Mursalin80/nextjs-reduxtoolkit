import Container from 'react-bootstrap/Container';
import NavMenu from '../components/Nav';

import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Container>
      <NavMenu />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default BasicExample;
