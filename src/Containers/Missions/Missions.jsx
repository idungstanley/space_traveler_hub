import React from 'react';
import useMission from '../../hooks/useMission';
import Mission from '../../Components/Mission/Mission';
import MissionPopup from '../../Components/MissionPopup/MissionPopup';
import useWindowSize from '../../hooks/useWindowSize';
import usePopup from '../../hooks/usePopup';
import * as styled from './missionsStyles';

const Missions = () => {
  const { missions } = useMission();
  const isDesktop = useWindowSize();
  const { displayPopup } = usePopup();
  return (
    <styled.Section>
      <styled.MissionsContainer>
        <styled.TableTitles>
          <h2>Mission</h2>
          {isDesktop && <h2>Description</h2>}
          <h2>Status</h2>
        </styled.TableTitles>

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
      </styled.MissionsContainer>
      {displayPopup && <MissionPopup />}
    </styled.Section>
  );
};

export default Missions;
