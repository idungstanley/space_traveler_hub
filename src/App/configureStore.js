import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/mission';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
