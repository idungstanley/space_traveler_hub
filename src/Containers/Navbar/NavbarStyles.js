import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px;
  height: 70px;
  width: 100%;
  background-color: white;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    margin-left: 1rem;
  }
`;

export const Links = styled.ul`
  position: fixed;
  z-index: 10;
  width: 100vw;
  background-color: black;
  color: white;
  height: 150px;
  left: 0;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(101%)')};
  transition: 0.3s ease;

  @media screen and (min-width: 768px) {
    position: static;
    transform: translateX(0);
    flex-direction: row;
    gap: 2rem;
    height: auto;
    width: auto;
    background-color: white;
    color: black;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 1rem;

  &.active {
    text-decoration: underline;
  }
`;
