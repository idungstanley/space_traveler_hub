import React from 'react';
import PropTypes from 'prop-types';
import useMission from '../../hooks/useMission';

const Mission = ({
  missionName,
  description,
  reserved,
  missionId,
}) => {
  const { handleJoinMission, handleLeaveMission } = useMission();

  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr 1fr',
  };

  return (
    <li style={grid}>
      <h2>{missionName}</h2>
      <p>{description}</p>
      <div>{reserved ? 'Active Member' : 'Not a Member'}</div>
      <button
        type="button"
        onClick={() => (reserved
          ? handleLeaveMission(missionId)
          : handleJoinMission(missionId))}
      >
        {reserved ? 'Leave Mission' : 'Join Mission'}
      </button>
    </li>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
