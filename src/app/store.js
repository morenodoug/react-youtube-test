import { configureStore } from '@reduxjs/toolkit';

import homeVideosReducer from "../features/homeVideos/homeVideosSlice";
import uiReducer  from "../features/ui/uiSlice";

export default configureStore({
  reducer: {

    homeVideos: homeVideosReducer,
    ui: uiReducer
  },
});
