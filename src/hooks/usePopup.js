import { useSelector, useDispatch } from 'react-redux';
import { openPopup, closePopup } from '../redux/mission';

const usePopup = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  const handleOpenPopup = (id) => {
    dispatch(openPopup(id));
  };

  const handleClosePopup = (id) => {
    dispatch(closePopup(id));
  };

  const activePopup = missions.filter((mission) => mission.popup);

  const displayPopup = activePopup[0] || false;

  return {
    activePopup,
    displayPopup,
    handleOpenPopup,
    handleClosePopup,
  };
};

export default usePopup;
