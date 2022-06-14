import { useSelector } from 'react-redux';

const useMission = () => {
  const missions = useSelector((state) => state.missions);

  return {
    missions,
  };
};

export default useMission;
