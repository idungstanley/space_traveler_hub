import React from 'react';
import logo from '../../Assets/planet.png';

const Navbar = () => (
  <header>
    <div>
      <img src={logo} alt="Logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <nav>
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <span>|</span>
        <li>My profile</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
