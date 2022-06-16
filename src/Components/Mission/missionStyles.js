import styled from 'styled-components/macro';

export const MissionContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr 1fr;
  }

  &:nth-child(even) {
    background-color: lightgray;
  }
`;

export const StatusBadge = styled.div`
  background-color: ${(props) => (props.reserved ? 'cyan' : 'gray')};

  @media screen and (min-width: 768px) {
    grid-area: 1/3/2/4;
  }
`;
