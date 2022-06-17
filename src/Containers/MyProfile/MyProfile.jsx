import React from 'react';
import { useSelector } from 'react-redux';
import useMission from '../../hooks/useMission';
import * as styled from './myProfileStyles';

const MyProfile = () => {
  const { activeMissions } = useMission();
  const Data = useSelector((state) => state.rockets);
  const activeRockets = Data.filter((rocket) => rocket.reserved);
  console.log(activeRockets);
  return (
    <styled.MyProfileContainer>
      <styled.ListContainer>
        <styled.Title>My Missions</styled.Title>
        <styled.List>
          {activeMissions.map(({ missionName, missionId }) => (
            <styled.Item key={missionId}>{missionName}</styled.Item>
          ))}
        </styled.List>
      </styled.ListContainer>
      <styled.ListContainer>
        <styled.Title>My Rockets</styled.Title>
        <styled.List>
          {activeRockets.map(({ rocketId, title }) => (
            <styled.Item key={rocketId}>{title}</styled.Item>
          ))}
        </styled.List>
      </styled.ListContainer>
    </styled.MyProfileContainer>
  );
};

export default MyProfile;
