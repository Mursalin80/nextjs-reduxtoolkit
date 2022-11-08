import React from 'react';
import Link from 'next/link';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({ user, fetPost }) {
  // console.log('Log: ', user.name);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{user.name}</Card.Title>
        {'Phone: ' + user.phone}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {user.email} <br />
          {user.website}
        </Card.Text>
        <Card.Title>Address</Card.Title>
        <Card.Text>
          City: {user.address.city} <br />
          Street: {user.address.street}
        </Card.Text>
        {fetPost && (
          <Button variant="info" className="w-100">
            <Link href={`users/${user.id}`}>Get All Posts.</Link>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;
