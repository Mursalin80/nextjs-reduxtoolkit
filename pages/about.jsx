import Container from 'react-bootstrap/Container';
import NavMeun from '../components/Nav';

const Other = (props) => {
  return (
    <Container fluid>
      <NavMeun />
      <h1 className="display-1" style={{ margin: '20px', paddingLeft: '20px' }}>
        About Us.
      </h1>
      <span style={{ margin: '20px', paddingLeft: '20px' }}>
        &copy; right 2020.
      </span>
    </Container>
  );
};

export default Other;
