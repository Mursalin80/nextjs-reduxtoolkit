import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { BsSignpost2Fill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import UserCard from '../../components/Card';
import NavBar from '../../components/Nav';

import { selectAllUsers, userById } from '../../store/store';

export default function Home({ posts }) {
  let users = useSelector(selectAllUsers);
  let user = userById(users, 1)[0];
  let router = useRouter();

  if (posts.length < 1) {
    router.push('/404');
    return;
  }

  return (
    <Container fluid>
      <NavBar />
      <div style={{ margin: '10px' }}>
        <UserCard user={user} />
        <h1 className="display-1 ">
          <BsSignpost2Fill />
          All Posts
        </h1>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center ">
        {posts.map((p) => (
          <div className="w-25" key={p.id}>
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
