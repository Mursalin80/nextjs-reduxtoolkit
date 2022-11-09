import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { wrapper } from '../store/store';
import { addUser } from '../store/usersSlice';

import UserCard from '../components/Card';
import UserCarousel from '../components/Courcel';
import NavMenu from '../components/Nav';
import { User } from '../types/types';

const Home = ({ users }) => {
  // let users = props.users;
  return (
    <Container
      fluid
      style={{
        display: 'flex',
        margin: '0',
        flexWrap: 'wrap',
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <div
        style={{
          height: '65vh',
        }}
      >
        <UserCarousel />
      </div>

      {users.map((user) => (
        <div key={user.id} style={{ margin: '5px', paddingLeft: '5px' }}>
          <UserCard user={user} fetPost={false} />
        </div>
      ))}
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
