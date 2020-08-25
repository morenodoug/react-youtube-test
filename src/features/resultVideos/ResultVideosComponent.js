import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector ,useDispatch} from "react-redux";
import { getResultVideosSelector,getSearchQuerySelector,getVideoSearchStatusSelector , resetState , fetchVideos, setSearchQuery} from "./resultVideosSlice";
import { VideoCard } from "../../app/components/VideoCard";
import { useLocation , Redirect} from "react-router-dom";



export const ResultVideosComponent = (props) =>{
    const location = useLocation() 
    const dispatch = useDispatch()
    const searchParams = new URLSearchParams(location.search)
    const hasSearchParams =  searchParams.has("search_query")
    const lastSearchQuery = useSelector(getSearchQuerySelector)
    const searchVideosStatus = useSelector(getVideoSearchStatusSelector)

    let searchQuery
    if(hasSearchParams){
        searchQuery = searchParams.get("search_query")

    } 
    
    useEffect(( ) =>{
        if( lastSearchQuery !== searchQuery){
            dispatch(setSearchQuery(searchQuery))
        }else  if(hasSearchParams && searchVideosStatus === "idle"){
            dispatch(fetchVideos({searchQuery}))
        }


    })
    const resultVideos = useSelector(getResultVideosSelector)
    const videoCards = resultVideos.map(createVideoCard)

    if(!hasSearchParams || searchQuery ==="")
        return <Redirect to="/"/>

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
                videoId={video.id}
                />
        </Grid>        
    )
}