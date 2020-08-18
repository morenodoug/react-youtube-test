import { configureStore } from '@reduxjs/toolkit';

import homeVideosReducer from "../features/homeVideos/homeVideosSlice";
import uiReducer  from "../features/ui/uiSlice";
import playListReducer from "../features/playList/playListSlice";
import  resultVideosReducer  from "../features/resultVideos/resultVideosSlice";

export default configureStore({
  reducer: {

    homeVideos: homeVideosReducer,
    ui: uiReducer,
    playList: playListReducer,
    resultVideos: resultVideosReducer
  },
});
