import  React  from "react";
import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Grid, Fade } from "@material-ui/core";
import { VideoCard } from "../../app/components/VideoCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAllTrendingVideosSelector , fetchTrendingVideos,  getVideoFetchStatus , getNextPageToken} from "./homeVideosSlice";
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppContainer } from "../../app/components/AppContainer";

import { PENDING_STATUS } from "../../app/utils/ApiStatusConstants";

export const TrendingVideos =(props) =>{

    const dispatch = useDispatch()
    const  trendingVideos = useSelector(getAllTrendingVideosSelector) 
    const  videoFetchStatus = useSelector(getVideoFetchStatus)
    const  nextPageToken =  useSelector(getNextPageToken)

    const showLoading = (videoFetchStatus === PENDING_STATUS)
    useEffect(() => {
        if(videoFetchStatus === "idle"){
            dispatch(fetchTrendingVideos())
        }
    })
    const videoCards = trendingVideos.map(createVideoCard)
    return(
        <>
            <InfiniteScroll
                dataLength ={videoCards.length}
                hasMore={nextPageToken != null}
                next={ () => onScrollHandler(nextPageToken,videoFetchStatus, dispatch) }
                style={{overflow: "hidden" }}    >        
                <AppContainer>
                    {videoCards}    
                </AppContainer>
            </InfiniteScroll>
            <Fade in={showLoading}> 
                <Grid container  justify="center"> 
                    <CircularProgress color="secondary"/>  
                </Grid>          
            </Fade>                
        </>
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
                videoId={video.id}
                publishedAt ={video.snippet.publishedAt}
                />
        </Grid>        
    )
}

function onScrollHandler(nextPageToken, videoFetchStatus, dispatch){
    if( nextPageToken !== null  && videoFetchStatus !== PENDING_STATUS ){
        dispatch(fetchTrendingVideos(nextPageToken))
    }

}
