import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector ,useDispatch} from "react-redux";
import {  fetchVideos, setSearchQuery} from "./resultVideosSlice";
import {getResultVideosSelector,getSearchQuerySelector,getVideoSearchStatusSelector , getNextPageTokenSelector } from './resultVideosSlice'
import { VideoCard } from "../../app/components/VideoCard";
import { useLocation , Redirect} from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { IDLE_STATUS, PENDING_STATUS } from "../../app/utils/ApiStatusConstants";


export const ResultVideosComponent = (props) =>{
    const location = useLocation() 
    const dispatch = useDispatch()
    const searchParams = new URLSearchParams(location.search)
    const hasSearchParams =  searchParams.has("search_query")
    const lastSearchQuery = useSelector(getSearchQuerySelector)
    const searchVideosStatus = useSelector(getVideoSearchStatusSelector)
    const nextPageToken = useSelector(getNextPageTokenSelector)
    const showLoading = (searchVideosStatus === PENDING_STATUS)
    let searchQuery
    if(hasSearchParams){
        searchQuery = searchParams.get("search_query")

    } 
    
    useEffect(( ) =>{
        if( lastSearchQuery !== searchQuery){
            dispatch(setSearchQuery(searchQuery))
        }else  if(hasSearchParams && searchVideosStatus === IDLE_STATUS){
            dispatch(fetchVideos({searchQuery}))
        }


    })
    const resultVideos = useSelector(getResultVideosSelector)
    const videoCards = resultVideos.map(createVideoCard)

    if(!hasSearchParams || searchQuery ==="")
        return <Redirect to="/"/>

    return(
        <>
            <InfiniteScroll
                dataLength={videoCards.length}
                hasMore={nextPageToken != null}
                next = { () => onScrollHandler(searchQuery, searchVideosStatus, nextPageToken,dispatch, fetchVideos)}
                style={{overflow: "hidden" }}
            >
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

function onScrollHandler(  searchQuery,searchVideosStatus, nextPageToken, dispatch , fetchVideos){
    if(nextPageToken !== null  && searchVideosStatus !== PENDING_STATUS){
        dispatch(fetchVideos({searchQuery, nextPageToken}))
    }

}