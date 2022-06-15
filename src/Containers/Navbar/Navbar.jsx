import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import useWindowSize from '../../hooks/useWindowSize';
import logo from '../../Assets/planet.png';
import * as styled from './NavbarStyles';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const isDesktop = useWindowSize();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <styled.Header>
      <styled.LogoContainer>
        <img src={logo} alt="Logo" />
        <h1>Space Traveler&apos;s Hub</h1>
        {isDesktop ? (
          ''
        ) : (
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        )}
      </styled.LogoContainer>
      <nav>
        <styled.Links isOpen={isOpen}>
          <styled.NavigationLink
            onClick={handleClose}
            to="/"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Rockets
          </styled.NavigationLink>
          <styled.NavigationLink
            onClick={handleClose}
            to="/missions"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Missions
          </styled.NavigationLink>
          {isDesktop && <span>|</span>}
          <styled.NavigationLink
            onClick={handleClose}
            to="/my-profile"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            My profile
          </styled.NavigationLink>
        </styled.Links>
      </nav>
    </styled.Header>
  );
};

export default Navbar;
