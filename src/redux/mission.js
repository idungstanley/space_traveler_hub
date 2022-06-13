import { getMissionsFromAPI } from '../services/spaceXAPI';

// Actions

const READ_DATA = 'spaceTravelersHub/missions/READ_DATA';

// Action Creator

const readMissionsData = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  console.log(missions);
  dispatch({
    type: READ_DATA,
    payload: missions,
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
