import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQueryVideos, getVideoData } from "../../app/utils/GoogleApi";
import SearchVideosService, {searchVideoParser} from "../../app/utils/SearchVideosService";
import { IDLE_STATUS, PENDING_STATUS, FULFILLED_STATUS,REJECTED_STATUS } from "../../app/utils/ApiStatusConstants";

export const  fetchVideos = createAsyncThunk("resultVideos",
 async  (queryData, thunkApi) =>{
  
  const searchVideosService = new SearchVideosService(getQueryVideos, getVideoData, searchVideoParser)
  return await searchVideosService.searchVideosByString(queryData.searchQuery,queryData.nextPageToken)

}) 
const initialState ={
    searchQuery :'',
    status: IDLE_STATUS,
    error: null,
    nextPageToken: null,
    videos: []
}

export const resultVideosSlice = createSlice({
    name:"resultVideos",
    initialState: initialState,
    reducers:{

      setSearchQuery: (currentState,action) =>{
        currentState.searchQuery = action.payload
        currentState.status = IDLE_STATUS
        currentState.nextPageToken = null
        currentState.error = null     
        currentState.videos =[]   
      }
    },
    extraReducers:{
      [fetchVideos.pending] : (state, action) =>{
        state.status = PENDING_STATUS
      },
      [fetchVideos.fulfilled] : (state, action) =>{
        state.status =FULFILLED_STATUS
        state.videos= state.videos.concat(action.payload.items)
        state.nextPageToken = action.payload.hasOwnProperty("nextPageToken") ? action.payload.nextPageToken : null 
      },
      [fetchVideos.rejected] : (state, action) =>{

        state.status =REJECTED_STATUS
        state.error = action.error
        state.nextPageToken = null
      }
    }
})

export default resultVideosSlice.reducer 
export const { setSearchQuery}  = resultVideosSlice.actions

export  const getResultVideosSelector = state => state.resultVideos.videos
export const getSearchQuerySelector = state => state.resultVideos.searchQuery
export const getVideoSearchStatusSelector = state => state.resultVideos.status

export const getNextPageTokenSelector = state => state.resultVideos.nextPageToken