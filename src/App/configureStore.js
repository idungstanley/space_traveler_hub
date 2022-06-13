import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/mission';
import rocketReducer from '../redux/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;
