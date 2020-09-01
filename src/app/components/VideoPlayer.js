
import React, {  useEffect} from 'react'
import Grid from "@material-ui/core/Grid"
import { Button } from '@material-ui/core';
import { YOUTUBE_IFRAME_API } from "../utils/Constants";
import { openVideoPlayer, closeVideoPlayer } from "../../features/videoPlayer/VideoPLayerSlice";
import { useDispatch } from "react-redux";

export const VideoPlayer = (props) =>{
    const { id } = props;
    let player = null
    const dispatch = useDispatch()
    const loadVideo = () => {
        // the Player object is created uniquely based on the id in props
        player = new window.YT.Player(`youtube-player`, {
          playerVars:{playlist: `${id},GZ2ZHkBzmHQ,vRXZj0DzXIA,Fcl30mWtJQU` }
        });
    };
    useEffect(() => {
      if (!window.YT) { // If not, load the script asynchronously
        addScriptPlayerYoutubeApi(loadVideo)
 
      } else { // If script is already there, load the video directly
        loadVideo();
  
      }
    })

    useEffect(() => {
      dispatch(openVideoPlayer())
      return () => {
        dispatch(closeVideoPlayer())
      }
    }, [])
  
    return(
        <Grid container   spacing={1} justify="space-evenly">    
            <Grid item xs={2} sm={2}  md={false} lg={false} />
            <Grid item container xs={8} sm={8} md={12}  spacing={2} direction="column"  >
              <Grid sm={12} justify="center" container item >
                <Button variant="contained" color="primary" size="medium" onClick={()=> startVideo(player)}>  play</Button>
              </Grid>
              
              <div id={`youtube-player`}></div>
            </Grid>                                    
            <Grid item xs={2} sm={2}  md={false} lg={false}/>
        </Grid>   
    )
}


function  addScriptPlayerYoutubeApi(loadVideoProvider){
  const tag = document.createElement('script');
  tag.src = YOUTUBE_IFRAME_API;
  // onYouTubeIframeAPIReady will load the video after the script is loaded
  window.onYouTubeIframeAPIReady = loadVideoProvider;
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}


function startVideo(player){
    console.log(player)
    player.cuePlaylist(["JszxlTOq0Sw","sypYNw6Fymk"]);
}
