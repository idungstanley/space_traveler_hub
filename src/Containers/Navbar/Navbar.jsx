import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/planet.png';

const Navbar = () => (
  <header>
    <div>
      <img src={logo} alt="Logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <nav>
      <ul>
        <NavLink to="/rockets">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <span>|</span>
        <NavLink to="/my-profile">My profile</NavLink>
      </ul>
    </nav>
  </header>
);

export default Navbar;
