import styled from 'styled-components/macro';

export const MyProfileContainer = styled.section`
  margin-top: 100px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const ListContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  padding: 8px;
`;

export const List = styled.ul`
  list-style: none;
  min-height: 200px;
  border: 1px solid black;
  border-radius: 6px;
`;

export const Item = styled.li`
  padding: 0.8rem 0.5rem;
  border-bottom: black 1px solid;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
