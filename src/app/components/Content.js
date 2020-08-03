import  React  from "react";
import { Grid } from "@material-ui/core";
import { VideoCard } from "./VideoCard";
import { useSelector } from "react-redux";
import { getAllTrendingVideosSelector } from "../../features/homeVideos/homeVideosSlice";
export const Content =(props) =>{
    const  trendingVideos = useSelector(getAllTrendingVideosSelector)

    const videoCardsGrid = trendingVideos.map( video => <Grid item  xs={12} sm={6} md={3}>
         <VideoCard  
        description = {video.snippet.description}
        title ={video.snippet.title}
        channelTitle ={video.snippet.channelTitle} 
        viewCount ={video.statistics.viewCount}
        thumbnailSrc ={video.snippet.thumbnails.medium.url}
        />
        
        </Grid>)
    

    return(
        <>
            {videoCardsGrid}
        </>
    )



}