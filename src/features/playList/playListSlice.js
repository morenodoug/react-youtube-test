import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    videos: []
}

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
            

        }
    }
})
export const    {addVideo} = playListSlice.actions

export const getPlayListVideosSelector =  state => state.playList.videos
export  default playListSlice.reducer


