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
  max-width: 600px;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  padding: 8px;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  min-height: 200px;
  border: 1px solid #ebebeb;
  border-radius: 6px;
`;

export const Item = styled.li`
  padding: 0.8rem 0.5rem;
  border-bottom: #ebebeb 1px solid;

  &:nth-last-child(1) {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    padding: 1.2rem 1rem;
  }
`;
