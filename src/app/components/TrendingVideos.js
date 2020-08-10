import  React  from "react";
import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Grid, Fade } from "@material-ui/core";
import { VideoCard } from "./VideoCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAllTrendingVideosSelector , fetchTrendingVideos,  getVideoFetchStatus , getNextPageToken} from "../../features/homeVideos/homeVideosSlice";
import InfiniteScroll from 'react-infinite-scroll-component';

export const TrendingVideos =(props) =>{

    const dispatch = useDispatch()
    const  trendingVideos = useSelector(getAllTrendingVideosSelector) 
    const  videoFetchStatus = useSelector(getVideoFetchStatus)
    const  nextPageToken =  useSelector(getNextPageToken)

    const showLoading = (videoFetchStatus === "pending")
    useEffect(() => {
        console.log("is rendering")
        if(videoFetchStatus === "idle"){
            dispatch(fetchTrendingVideos())
            .then(res => console.log(res))
        }
    })
    const videoCards = trendingVideos.map(createVideoCard)
    return(
        <>
            <InfiniteScroll
                dataLength ={videoCards.length}
                hasMore={nextPageToken != null}
                next={ () => onClickHandler(nextPageToken,videoFetchStatus, dispatch) }
                style={{overflow: "hidden" }}    >        
                <Grid container   spacing={1} justify="space-evenly">    
                    <Grid item xs={2} sm={2}  md={false} lg={false} />
                    <Grid item container xs={8} sm={8} md={12}  spacing={2} >
                            {videoCards}                  
                    </Grid>                                    
                    <Grid item xs={2} sm={2}  md={false} lg={false}/>
                </Grid>
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
                />
        </Grid>        
    )
}

function onClickHandler(nextPageToken, videoFetchStatus, dispatch){
    if( nextPageToken !== null  && videoFetchStatus !== "pending" ){
        dispatch(fetchTrendingVideos(nextPageToken))
    }

}
