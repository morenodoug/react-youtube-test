
import React, {  useEffect} from 'react'
import Grid from "@material-ui/core/Grid"
import { makeStyles , useTheme} from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { YOUTUBE_IFRAME_API } from "../utils/Constants";
import { openVideoPlayer, closeVideoPlayer } from "../../features/videoPlayer/VideoPLayerSlice";
import { useDispatch, useSelector } from "react-redux";
import {playingVideoSelector, playNextVideo, playPreviousVideo} from "../../features/playList/playListSlice"


const useStyles = makeStyles((theme) => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export const VideoPlayer = (props) =>{
    let player = null
    const dispatch = useDispatch()
    const classes = useStyles()
    const playingVideoId =   useSelector(playingVideoSelector)
    const changeStatushandler = createOnStateChange(dispatch, playNextVideo)
    


    const loadVideo = () => {
        // the Player object is created uniquely based on the id in props
        player = new window.YT.Player(`youtube-player`, {
          videoId: playingVideoId,
          events: {

            'onStateChange': changeStatushandler,
            'onReady':onPlayerReady
          }          
        });
    };
    useEffect(() => {
      if (!window.YT) { // If not, load the script asynchronously
        addScriptPlayerYoutubeApi(loadVideo)
 
      } else { // If script is already there, load the video directly
        loadVideo();
  
      }

      return () => player.destroy()
    })

    useEffect(() => {
      dispatch(openVideoPlayer())
      return () => {
        dispatch(closeVideoPlayer())
      }
    }, [])
  
    return(
        <Grid container   justify="space-evenly">    
          <Grid item xs={false} sm={false}  md={false} lg={2} />
          <Grid item container xs={8} sm={8} md={12}  spacing={2} direction="column"  >
            <Grid  justify="center" container item spacing={2} className={classes.buttons}>
              <Button variant="contained" color="primary" size="medium" startIcon={<SkipPreviousIcon/>}  onClick={()=> previousVideo(player, dispatch, playPreviousVideo)}>  Previous</Button>
              <Button variant="contained" color="primary" size="medium" endIcon={<SkipNextIcon/>} onClick={()=> startVideo(player, dispatch, playNextVideo)}>  Next</Button>
            </Grid>
            <Grid item container  justify="space-evenly"  >
              <div id={`youtube-player`}></div>
            </Grid>
            
          </Grid>                                    
          <Grid item xs={false} sm={false}  md={false} lg={2}/>
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


function startVideo(player, dispatch, playNextVideoProvider){
    // console.log(player)
    // player.cuePlaylist(["JszxlTOq0Sw","sypYNw6Fymk"]);
    dispatch(playNextVideoProvider({}))
}
function previousVideo(player, dispatch, playPreviousVideoProvider){
  // console.log(player)
  // player.cuePlaylist(["JszxlTOq0Sw","sypYNw6Fymk"]);
  dispatch(playPreviousVideoProvider({}))
}

function createOnStateChange(dispatch, playNextVideoProvider){
  return(event) =>{
    if (event.data === window.YT.PlayerState.ENDED){
      dispatch(playNextVideoProvider({}))
    }
  }
}


function onPlayerReady(event) {  
  event.target.playVideo();

}