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
        playNextVideo:(currentState, action) =>{
            const playingVideoIndex = currentState.videos.findIndex( video => video.videoId === currentState.playingVideoId)
            if(playingVideoIndex <  currentState.videos.length -1){
                currentState.playingVideoId = currentState.videos[playingVideoIndex+1].videoId

            }

        },
        playPreviousVideo:(currentState, action) =>{
            const playingVideoIndex = currentState.videos.findIndex(video => video.videoId === currentState.playingVideoId)
            if(playingVideoIndex >  0){
                currentState.playingVideoId = currentState.videos[playingVideoIndex-1].videoId
            }
        },
        removeVideo:(currentState, action) =>{
            const videoIndex = currentState.videos.findIndex( video =>  video.videoId ===action.payload.videoId)
            if(videoIndex >= 0){
                const firstPart =  currentState.videos.slice(0,videoIndex)
                const lastPart = currentState.videos.slice(videoIndex +1, currentState.videos.length)
                currentState.videos = [...firstPart, ...lastPart]
            }
           
        }


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
export const    {addVideo,playNextVideo, playPreviousVideo, removeVideo} = playListSlice.actions
export  default playListSlice.reducer
export const getPlayListVideosSelector =  state => state.playList.videos
export const playingVideoSelector = state =>  state.playList.playingVideoId


