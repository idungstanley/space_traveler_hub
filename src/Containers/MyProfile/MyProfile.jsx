import React from 'react';
import useMission from '../../hooks/useMission';

const MyProfile = () => {
  const { activeMissions } = useMission();
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
    </section>
  );
};

export default MyProfile;
