import React from 'react';
import { useSelector } from 'react-redux';
import useMission from '../../hooks/useMission';

const MyProfile = () => {
  const { activeMissions } = useMission();
  const Data = useSelector((state) => state.rockets);
  const activeRockets = Data.filter((rocket) => rocket.reserved);
  console.log(activeRockets);
  return (
    <section>
      <div>
        <h2>My Missions</h2>
        <ul>
          {activeMissions.map(({ missionName, missionId }) => (
            <li key={missionId}>{missionName}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {activeRockets.map(({ rocketId, title }) => (
            <li key={rocketId}>{title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
