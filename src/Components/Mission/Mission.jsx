import React from 'react';
import PropTypes from 'prop-types';
import useMission from '../../hooks/useMission';
import useWindowSize from '../../hooks/useWindowSize';
import usePopup from '../../hooks/usePopup';
import * as styled from './missionStyles';

const Mission = ({
  missionName,
  description,
  reserved,
  missionId,
}) => {
  const { handleJoinMission, handleLeaveMission } = useMission();
  const isDesktop = useWindowSize();
  const { handleOpenPopup } = usePopup();

  return (
    <styled.MissionContainer>
      <styled.Title>{missionName}</styled.Title>
      {isDesktop && (
        <>
          <p>{description}</p>
          <button
            type="button"
            onClick={() => (reserved
              ? handleLeaveMission(missionId)
              : handleJoinMission(missionId))}
          >
            {reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </>
      )}
      <styled.StatusBadge reserved={reserved}>
        {reserved ? 'Active Member' : 'Not a Member'}
      </styled.StatusBadge>
      {!isDesktop && (
        <styled.SignIcon onClick={() => handleOpenPopup(missionId)}>
          See more
        </styled.SignIcon>
      )}
    </styled.MissionContainer>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
