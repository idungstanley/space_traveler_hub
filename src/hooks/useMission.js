import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  joinMission,
  leaveMission,
  readMissionsData,
} from '../redux/mission';

const useMission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(readMissionsData());
    }
  });

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  const activeMissions = missions.filter(
    (mission) => mission.reserved,
  );

  return {
    missions,
    activeMissions,
    handleJoinMission,
    handleLeaveMission,
  };
};

export default useMission;
