import React from 'react';
import useMission from '../../hooks/useMission';
import usePopup from '../../hooks/usePopup';
import * as styled from './missionPopupStyles';

const MissionPopup = () => {
  const { handleJoinMission, handleLeaveMission } = useMission();
  const { activePopup, handleClosePopup } = usePopup();
  const {
    missionId, missionName, description, reserved,
  } = activePopup[0];
  return (
    <styled.BlurrBackground data-testid="popup">
      <styled.PopupContainer>
        <styled.CloseIcon
          onClick={() => handleClosePopup(missionId)}
        />
        <styled.Title>
          {missionName}
          <styled.RankIcon />
        </styled.Title>
        <styled.Description>{description}</styled.Description>
        <styled.JoinBtn
          reserved={reserved}
          type="button"
          onClick={() => (reserved
            ? handleLeaveMission(missionId)
            : handleJoinMission(missionId))}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </styled.JoinBtn>
      </styled.PopupContainer>
    </styled.BlurrBackground>
  );
};

export default MissionPopup;
