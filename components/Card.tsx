import React from 'react';
import Link from 'next/link';
import { User } from '../types/types';
import {
  FaMailBulk,
  FaPhoneAlt,
  FaAddressCard,
  FaCity,
  FaUserAlt,
  FaBattleNet,
} from 'react-icons/fa';
import { GiStreetLight } from 'react-icons/gi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sty from './card.module.css';

function UserCard({ user, fetPost }: { user: User; fetPost: boolean }) {
  // console.log('Log: ', user.name);

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <FaUserAlt className={sty.m_icon} />
          {user.name}
        </Card.Title>
        <FaPhoneAlt className={sty.m_icon} />
        {user.phone}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <FaMailBulk className={sty.l_icon} />
          {user.email} <br />
          {user.website}
        </Card.Text>
        <Card.Title>
          <FaAddressCard className={sty.xxl_icon} />
        </Card.Title>
        <Card.Text>
          <FaCity className={sty.m_icon} /> {user.address.city} <br />
          <GiStreetLight className={sty.m_icon} /> {user.address.street}
        </Card.Text>
        {fetPost && (
          <Button variant="info" className="text-white">
            <FaBattleNet className={sty.xl_icon} />
            <Link href={`users/${user.id}`} className="w-50 text-white">
              Get All Posts.
            </Link>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;
