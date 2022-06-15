import { getRocketsFromAPI } from '../services/spaceXAPI';
// Action
const READ = 'spaceTravelersHub/rocket/READ';
const BOOK_RESERVE = 'spaceTravelerHub/rocket/BOOK_RESERVE';
const CANCEL_RESERVE = 'spaceTravelerHub/rocket/CANCEL_RESERVE';
// Reducer
const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    case BOOK_RESERVE:
      return state.map((rocket) => {
        if (rocket.rocket_id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    case CANCEL_RESERVE:
      return state.map((rocket) => {
        if (rocket.rocket_id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

// Action creator
export const readRocketData = () => async (dispatch) => {
  const res = await getRocketsFromAPI();
  const filterData = res.map(
    ({
      rocket_id: rocketId,
      description: desc,
      rocket_name: title,
      flickr_images: image,
    }) => ({
      rocketId, desc, title, image, reserved: false,
    }),
  );
  dispatch({ type: READ, payload: filterData });
};

export const bookRocket = (id) => ({ type: BOOK_RESERVE, payload: id });

export const cancelBooking = (id) => ({ type: CANCEL_RESERVE, payload: id });

export default rocketReducer;
