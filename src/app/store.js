import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeVideosReducer from "../features/homeVideos/homeVideosSlice";
import uiReducer  from "../features/ui/uiSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    homeVideos: homeVideosReducer,
    ui: uiReducer
  },
});
