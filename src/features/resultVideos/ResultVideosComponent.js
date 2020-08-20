import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { getResultVideosSelector } from "./resultVideosSlice";
import { VideoCard } from "../../app/components/VideoCard";
import { useLocation , Redirect} from "react-router-dom";
import { getQueryVideos } from "../../app/utils/GoogleApi";


export const ResultVideosComponent = (props) =>{
    const location = useLocation() 
    const searchParams = new URLSearchParams(location.search)
    const hasSearchParams =  searchParams.has("search_query")
    let searchQuery
    if(hasSearchParams){
        searchQuery = searchParams.get("search_query")

    } 
    
    useEffect(( ) =>{
        if(hasSearchParams &&  searchQuery !== ""){
            try{
                getQueryVideos(searchQuery, null)
                .then(res => console.log(res))
                .catch(err  => console.log(err))  
                

            }catch(error){}
        }else{

            alert("redirect")
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