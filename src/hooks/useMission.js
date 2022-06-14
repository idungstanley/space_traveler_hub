import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/mission';

const useMission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return {
    missions,
    handleJoinMission,
    handleLeaveMission,
  };
};

export default useMission;
