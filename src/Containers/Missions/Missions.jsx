import React from 'react';
import useMission from '../../hooks/useMission';

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
            missionName, description, missionId, status,
          }) => (
            <li style={grid} key={missionId}>
              <h2>{missionName}</h2>
              <p>{description}</p>
              <div>{status}</div>
              <button type="button">Join Mission</button>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Missions;
