import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQueryVideos, getVideoData } from "../../app/utils/GoogleApi";
import SearchVideosService, {searchVideoParser} from "../../app/utils/SearchVideosService";


export const  fetchVideos = createAsyncThunk("resultVideos",
 async  (queryData, thunkApi) =>{
  
  const searchVideosService = new SearchVideosService(getQueryVideos, getVideoData, searchVideoParser)
  return await searchVideosService.searchVideosByString(queryData.searchQuery,queryData.nextPageToken)

}) 
const initialState ={
    searchQuery :'',
    status: 'idle',
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
        currentState.status = 'idle'
        currentState.nextPageToken = null
        currentState.error = null     
        currentState.videos =[]   
      }
    },
    extraReducers:{
      [fetchVideos.pending] : (state, action) =>{
        state.status = 'pending'
      },
      [fetchVideos.fulfilled] : (state, action) =>{
        state.status ='fullifed'
        state.videos= state.videos.concat(action.payload.items)
        state.nextPageToken = action.payload.hasOwnProperty("nextPageToken") ? action.payload.nextPageToken : null 
      },
      [fetchVideos.rejected] : (state, action) =>{

        state.status ="rejected"
        state.error = action.error
      }
    }
})

export default resultVideosSlice.reducer 
export const { setSearchQuery}  = resultVideosSlice.actions

export  const getResultVideosSelector = state => state.resultVideos.videos
export const getSearchQuerySelector = state => state.resultVideos.searchQuery
export const getVideoSearchStatusSelector = state => state.resultVideos.status