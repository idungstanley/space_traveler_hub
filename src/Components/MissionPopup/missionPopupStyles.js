import styled from 'styled-components/macro';
import { GrClose } from 'react-icons/gr';
import { GiRank3 } from 'react-icons/gi';

export const BlurrBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  align-items: center;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PopupContainer = styled.div`
  width: 90%;
  margin-inline: auto;
  border-radius: 1rem;
  padding: 2rem 1rem;
  background-color: white;
  position: relative;
`;

export const CloseIcon = styled(GrClose)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 6px 12px;
`;

export const RankIcon = styled(GiRank3)`
  min-width: 30px;
  min-height: 30px;
`;

export const Description = styled.p`
  margin: 1rem auto;
  max-height: 250px;
  min-height: 250px;
  overflow: scroll;
  font-size: 0.9rem;
  line-height: 1.2rem;
  padding: 8px;
  letter-spacing: 0.6px;
`;

export const JoinBtn = styled.button`
  outline: none;
  background-color: transparent;
  appearance: none;
  border: 1px solid ${(props) => (props.reserved ? 'red' : 'gray')};
  color: ${(props) => (props.reserved ? 'red' : 'gray')};
  border-radius: 3px;
  display: block;
  margin-inline: auto;
  padding: 5px 10px;
`;
