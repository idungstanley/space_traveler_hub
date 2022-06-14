import { getMissionsFromAPI } from '../services/spaceXAPI';

// Actions

const READ_DATA = 'spaceTravelersHub/missions/READ_DATA';

// Action Creator

const readMissionsData = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  const missionsWithStatus = missions.map(
    ({
      mission_id: missionId,
      mission_name: missionName,
      description,
    }) => ({
      missionId,
      missionName,
      description,
      status: 'Not a member',
    }),
  );
  dispatch({
    type: READ_DATA,
    payload: missionsWithStatus,
  });
};

// Reducer

const missionsReducer = (state = [], action) => {
  if (action.type === READ_DATA) {
    return action.payload;
  }

  return state;
};

export { readMissionsData };

export default missionsReducer;
