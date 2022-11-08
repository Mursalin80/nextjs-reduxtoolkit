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
      <h1 className="display-1">All Userd</h1>

      <div
        style={{
          display: 'flex',
          margin: '5px auto',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{ margin: '5px', paddingLeft: '5px', width: '30%' }}
          >
            <UserCard user={user} fetPost={true} />
          </div>
        ))}
      </div>
    </Container>
  );
}
