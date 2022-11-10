import Container from 'react-bootstrap/Container';
import NavMeun from '../components/Nav';
import { AiFillCopyrightCircle } from 'react-icons/ai';

const Other = () => {
  return (
    <Container fluid>
      <NavMeun />
      <h1 className="display-1 m-2 p-4 d-flex justify-content-center">
        About Us.
      </h1>
      <span className="m-4 p-4 ml-10 fixed-bottom bg-secondary">
        <AiFillCopyrightCircle className="display-6" />
        Right act 2020.
      </span>
    </Container>
  );
};

export default Other;
