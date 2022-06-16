import React from 'react';
import useMission from '../../hooks/useMission';
import Mission from '../../Components/Mission/Mission';
import useWindowSize from '../../hooks/useWindowSize';
import * as styled from './missionsStyles';

const Missions = () => {
  const { missions } = useMission();
  const isDesktop = useWindowSize();
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
    </styled.Section>
  );
};

export default Missions;
