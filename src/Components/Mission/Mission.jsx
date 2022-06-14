import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missionName, description, status }) => {
  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr 1fr',
  };

  return (
    <li style={grid}>
      <h2>{missionName}</h2>
      <p>{description}</p>
      <div>{status}</div>
      <button type="button">Join Mission</button>
    </li>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Mission;
