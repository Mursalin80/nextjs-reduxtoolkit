import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import { selectAllUsers, userById } from '../../store/store';
import NavMenu from '../../components/Nav';
import UserCard from '../../components/Card';

export default function Users() {
  let users = useSelector(selectAllUsers);
  let user = userById(users, 1);

  return (
    <Container fluid>
      <NavMenu />
      <h1 className="display-1 d-flex justify-content-center">All Userd</h1>

      <div className="d-flex flex-row flex-wrap m-1 justify-content-center">
        {users.map((user) => (
          <div key={user.id} className="m-2 w-25 pr-3">
            <UserCard user={user} fetPost={true} />
          </div>
        ))}
      </div>
    </Container>
  );
}
