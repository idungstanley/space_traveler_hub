import styled from 'styled-components/macro';

export const Section = styled.section`
  width: 100%;
  margin-top: 100px;
  overflow-x: hidden;
`;

export const MissionsContainer = styled.ul`
  width: 90%;
  margin-inline: auto;
  border: 1px solid gray;
  max-width: 1080px;
`;

export const TableTitles = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.5fr;
  justify-items: center;
  padding: 4px 6px;
  grid-gap: 1px;
  border-bottom: 1px solid gray;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr 1fr;
  }
`;
