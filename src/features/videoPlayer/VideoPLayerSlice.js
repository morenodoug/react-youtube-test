import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpen : false
}

const videoPlayerSlice = createSlice({
    name:"videoPlayer",
    initialState: initialState,
    reducers:{
        openVideoPlayer:(currentState, action) =>{
            currentState.isOpen = true
        },
        closeVideoPlayer:(currentState, action) =>{
            currentState.isOpen=false
        }

    }
})


export  default videoPlayerSlice.reducer
export const { openVideoPlayer, closeVideoPlayer } = videoPlayerSlice.actions
export const isVideoPlayerOpenSelector = state => state.videoPlayer.isOpen

