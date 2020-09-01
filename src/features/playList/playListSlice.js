import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState ={
    videos: [],
    playingVideoId: null

}
export const  startPlayingList = createAsyncThunk("startPlaying",
async (_, thunkApi) =>{
    const videoList  =  getPlayListVideosSelector(thunkApi.getState())
    if(videoList.length >0){
        return  videoList[0]
    }
    throw new Error("playList is empty")

}
)
const playListSlice = createSlice({
    name:"playList",
    initialState: initialState,
    reducers:{
        addVideo: (currentState, action) =>{
            const newVideo = {...action.payload.video} 
            const alreadyAdded = currentState.videos.some((video) => video.videoId === newVideo.videoId)
            if(!alreadyAdded){
                currentState.videos.push(newVideo)
            }
        },

    },
    extraReducers:{
        [startPlayingList.fulfilled]: ( currentState, action) =>{
            currentState.playingVideoId = action.payload.videoId
        },
        [startPlayingList.rejected] : (currentState,action) =>{
            currentState.playingVideoId = null
        }
    }
})
export const    {addVideo} = playListSlice.actions

export const getPlayListVideosSelector =  state => state.playList.videos
export  default playListSlice.reducer


