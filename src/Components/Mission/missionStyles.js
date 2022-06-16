import styled from 'styled-components/macro';
import { FaInfoCircle } from 'react-icons/fa';

export const MissionContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.5fr;
  justify-items: center;
  align-items: center;
  padding: 0.8rem 0.3rem;
  border-bottom: 1px solid gray;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr 1fr;
  }

  &:nth-child(even) {
    background-color: lightgray;
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
  background-color: ${(props) => (props.reserved ? '#008b8b' : '#565656')};

  @media screen and (min-width: 768px) {
    grid-area: 1/3/2/4;
  }
`;

export const Title = styled.h2`
  font-size: 0.8rem;
  justify-self: left;
  padding: 0 4px;
  border-right: 1px;
`;

export const SignIcon = styled(FaInfoCircle)``;
