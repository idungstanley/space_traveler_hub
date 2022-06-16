import { getMissionsFromAPI } from '../services/spaceXAPI';

// Actions

const READ_DATA = 'space_TravelersHub/missions/READ_DATA';
const JOIN_MISSION = 'spaceTravelersHub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelersHub/missions/LEAVE_MISSION';
const OPEN_POPUP = 'spaceTravelersHub/missions/OPEN_POPUP';
const CLOSE_POPUP = 'spaceTravelersHub/missions/CLOSE_POPUP';

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
      reserved: false,
      popup: false,
    }),
  );
  dispatch({
    type: READ_DATA,
    payload: missionsWithStatus,
  });
};

const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const openPopup = (id) => ({
  type: OPEN_POPUP,
  payload: id,
});

const closePopup = (id) => ({
  type: CLOSE_POPUP,
  payload: id,
});

// Reducer

const missionsReducer = (state = [], action) => {
  if (action.type === READ_DATA) {
    return action.payload;
  }

  if (action.type === JOIN_MISSION) {
    return state.map((mission) => {
      if (mission.missionId === action.payload) {
        return { ...mission, reserved: true };
      }
      return mission;
    });
  }

  if (action.type === LEAVE_MISSION) {
    return state.map((mission) => {
      if (mission.missionId === action.payload) {
        return { ...mission, reserved: false };
      }
      return mission;
    });
  }

  if (action.type === OPEN_POPUP) {
    return state.map((mission) => {
      if (mission.missionId === action.payload) {
        return { ...mission, popup: true };
      }
      return mission;
    });
  }

  if (action.type === CLOSE_POPUP) {
    return state.map((mission) => {
      if (mission.missionId === action.payload) {
        return { ...mission, popup: false };
      }
      return mission;
    });
  }

  return state;
};

export {
  readMissionsData,
  joinMission,
  leaveMission,
  openPopup,
  closePopup,
};

export default missionsReducer;
