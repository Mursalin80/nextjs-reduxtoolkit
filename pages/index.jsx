import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { wrapper } from '../store/store';
import { addUser } from '../store/usersSlice';

import UserCard from '../components/Card';
import UserCarousel from '../components/Courcel';
import NavMenu from '../components/Nav';

const Home = ({ users }) => {
  return (
    <Container fluid>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <div>
        <UserCarousel />
      </div>
      <div className="d-flex flex-wrap justify-content-center ">
        {users.map((user) => (
          <div key={user.id} className="m-1">
            <UserCard user={user} fetPost={false} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  store.dispatch(addUser(users));

  return {
    props: {
      users,
    },
    // revalidate: 10, // In seconds
  };
});

export default Home;
