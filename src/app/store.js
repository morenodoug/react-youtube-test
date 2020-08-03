import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeVideosReducer from "../features/homeVideos/homeVideosSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    homeVideos: homeVideosReducer
  },
});
