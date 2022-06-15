import React from 'react';
import useMission from '../../hooks/useMission';
import Mission from '../../Components/Mission/Mission';

const Missions = () => {
  const { missions } = useMission();
  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr 1fr',
  };
  return (
    <section>
      <ul>
        <li style={grid}>
          <h2>Mission</h2>
          <h2>Description</h2>
          <h2>Status</h2>
        </li>

        {missions.map(
          ({
            missionName, description, missionId, reserved,
          }) => (
            <Mission
              key={missionId}
              missionId={missionId}
              missionName={missionName}
              description={description}
              reserved={reserved}
            />
          ),
        )}
      </ul>
    </section>
  );
};

export default Missions;
