import { createSlice } from "@reduxjs/toolkit";
import { videoListResponse } from "../../app/sample_responses/sample_responses";

const initialState = {
    trendingVideosList : videoListResponse.items.slice()

}

export const  homeVideosSlice = createSlice({

    name:'homeVideos',
    initialState: initialState,
    reducers:{}
})

export default homeVideosSlice.reducer 

export const getAllTrendingVideosSelector = (state) => state.homeVideos.trendingVideosList