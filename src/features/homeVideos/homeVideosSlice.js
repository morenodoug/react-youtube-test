import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingVideos } from "../../app/utils/GoogleApi";
import { PENDING_STATUS, FULFILLED_STATUS,REJECTED_STATUS } from "../../app/utils/ApiStatusConstants";
const initialState = {
    videos:[],
    error: null,
    status:  "idle",
    nextPageToken: null

}

export const fetchTrendingVideos = createAsyncThunk('trendingVideos/fetchTrendingVideos',  async (nextPageToken, thunkApi) =>{
    return await getTrendingVideos(nextPageToken)

})

 const  homeVideosSlice = createSlice({

    name:'homeVideos',
    initialState: initialState,
    reducers:{},
    extraReducers:{
        [fetchTrendingVideos.pending]:(state, action) =>{

            state.status =PENDING_STATUS
        },
        [fetchTrendingVideos.fulfilled] : (state,action) =>{
            state.status = FULFILLED_STATUS
            state.videos = state.videos.concat(action.payload.items)
            state.nextPageToken = action.payload.hasOwnProperty("nextPageToken") ?  action.payload.nextPageToken : null
        },

        [fetchTrendingVideos.rejected] : (state, action) =>{
            state.status = REJECTED_STATUS
            state.error = action.payload
        }


    }
})

export default homeVideosSlice.reducer 

export const getAllTrendingVideosSelector = (state) => state.homeVideos.videos
export const getVideoFetchStatus = (state) => state.homeVideos.status
export const getNextPageToken =( state) => state.homeVideos.nextPageToken