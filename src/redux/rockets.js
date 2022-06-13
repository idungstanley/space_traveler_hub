import { getRocketsFromAPI } from '../services/spaceXAPI';
// Action
const READ = 'space_hub_traveler/reducer/READ';

// Reducer
const rocketReducer = (state, action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

// Action creator
export const readRocketData = () => async (dispatch) => {
  const res = await getRocketsFromAPI();
  dispatch({ type: READ, payload: res });
};

export default rocketReducer;
