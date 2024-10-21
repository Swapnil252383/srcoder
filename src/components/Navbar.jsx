import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const location = useLocation(); // Get the current path

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://yt3.googleusercontent.com/rXRlLWPFMc6wVRBsJrKWVraS4HLMmXppPp4LEgdVTapimMnmx0mj8PczPB--l32E_BfQzrDT=s160-c-k-c0x00ffffff-no-rj" alt="CodeLearn Logo" className="logo-image"  />
          
        </Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/course' ? 'active' : ''}>
          <Link to="/course">Courses</Link>
        </li>
        <li className={location.pathname === '/notes' ? 'active' : ''}>
          <Link to="/notes">Notes</Link>
        </li>
        <li className={location.pathname === '/profile' ? 'active' : ''}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/login">Login</Link>
        </li>
        <li className={location.pathname === '/signin' ? 'active' : ''}>
          <Link to="/signin">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
