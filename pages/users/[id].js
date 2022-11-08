import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import UserCard from '../../components/Card';
import NavBar from '../../components/Nav';
import { selectAllUsers, userById } from '../../store/store';

export default function Home({ posts }) {
  let users = useSelector(selectAllUsers);
  let user = userById(users, 1)[0];

  return (
    <Container fluid>
      <NavBar />

      <UserCard user={user} />
      <h1 className="display-1 ">All Posts </h1>

      <div></div>
      <div
        style={{
          display: 'flex',
          margin: '5px auto',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {posts.map((p) => (
          <div style={{ width: '30%' }}>
            <Card className="text-center m-2">
              <Card.Header>{`Post-ID ${p.id}`}</Card.Header>
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.body}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export async function getServerSideProps({ query }) {
  let url = `https://jsonplaceholder.typicode.com/users/${query.id}/posts`;
  const res = await fetch(url);
  const posts = await res.json();

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
