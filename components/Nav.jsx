import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className=" w-100 " style={{ backgroundColor: '#3F51B5' }}>
      <ul className="nav justify-content-end ">
        <li className="nav-item ">
          <Link
            className="nav-link active text-white"
            aria-current="page"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" href="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
