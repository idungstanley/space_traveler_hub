import styled from 'styled-components/macro';
import { FaInfoCircle } from 'react-icons/fa';

export const MissionContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.5fr;
  justify-items: center;
  align-items: center;
  padding: 0.7rem 0.3rem;
  border-bottom: 1px solid gray;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr 1fr;
  }

  &:nth-child(even) {
    background-color: #ebebeb;
  }

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;

export const StatusBadge = styled.div`
  font-size: 0.7rem;
  border-radius: 3px;
  padding: 2px 6px;
  color: white;
  text-align: center;
  background-color: ${(props) => (props.reserved ? '#008b8b' : '#565656')};

  @media screen and (min-width: 768px) {
    border-radius: 6px;
    grid-area: 1/3/2/4;
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-size: 0.8rem;
  justify-self: left;
  padding: 0 4px;
  border-right: 1px;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 0.9rem;
`;

export const SignIcon = styled(FaInfoCircle)``;

export const JoinBtn = styled.button`
  outline: none;
  background-color: transparent;
  appearance: none;
  border: 1px solid ${(props) => (props.reserved ? 'red' : '#565656')};
  color: ${(props) => (props.reserved ? 'red' : '#565656')};
  border-radius: 3px;
  display: block;
  margin-inline: auto;
  padding: 8px 8px;
  cursor: pointer;
`;
