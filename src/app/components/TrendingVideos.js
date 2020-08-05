import  React  from "react";
import { Grid } from "@material-ui/core";
import { VideoCard } from "./VideoCard";
import { useSelector } from "react-redux";
import { getAllTrendingVideosSelector } from "../../features/homeVideos/homeVideosSlice";

export const TrendingVideos =(props) =>{
    const  trendingVideos = useSelector(getAllTrendingVideosSelector) 
    const videoCards = trendingVideos.map(createVideoCard)
    return(
        <Grid container   spacing={1} justify="space-evenly">
            <Grid item xs={2} sm={2}  md={false} lg={false} />
            <Grid item container xs={8} sm={8} md={12}  spacing={2} >
                {videoCards}
            </Grid>             
            <Grid item xs={2} sm={2}  md={false} lg={false}/>
        </Grid>
    )
}


function createVideoCard(video){
    return (
        <Grid item  xs={12} sm={12} md={4} lg={3} key={video.id}>
            <VideoCard   
                description = {video.snippet.description}
                title ={video.snippet.title}
                channelTitle ={video.snippet.channelTitle} 
                viewCount ={video.statistics.viewCount}
                thumbnailSrc ={video.snippet.thumbnails.medium.url}
                />
        </Grid>        
    )
}
