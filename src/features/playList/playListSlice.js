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
            const alreadyAdded = currentState.videos.some((video) => video.videoId === newVideo)
            if(!alreadyAdded){
                currentState.videos.push(newVideo)
            }
            

        }
    }
})
export const    {addVideo} = playListSlice.actions
export  default playListSlice.reducer


