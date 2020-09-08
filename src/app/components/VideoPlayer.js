
import React, { useEffect} from 'react'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { openVideoPlayer, closeVideoPlayer } from "../../features/videoPlayer/VideoPLayerSlice";
import { useDispatch, useSelector } from "react-redux";
import {playingVideoSelector, playNextVideo, playPreviousVideo} from "../../features/playList/playListSlice"
import { YoutubeVideoPlayer } from "./YoutubeVideoPlayer";

const useStyles = makeStyles((theme) => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export const VideoPlayer = (props) =>{
    const dispatch = useDispatch()
    const classes = useStyles()
    const playingVideoId =   useSelector(playingVideoSelector)
    const parentDivId =`youtube-player`

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
              <Button variant="contained" color="primary" size="medium" startIcon={<SkipPreviousIcon/>}  onClick={()=> previousVideo( dispatch, playPreviousVideo)}>  Previous</Button>
              <Button variant="contained" color="primary" size="medium" endIcon={<SkipNextIcon/>} onClick={()=> nextVideo(dispatch, playNextVideo)}>  Next</Button>
            </Grid>
            <Grid item container  justify="space-evenly"  >
              <div id={parentDivId}></div>
              <YoutubeVideoPlayer parentDivId={parentDivId}   playingVideoId={playingVideoId} playNextVideoProvider ={() =>{nextVideo(dispatch, playNextVideo)}}/>
            </Grid>
            
          </Grid>                                    
          <Grid item xs={false} sm={false}  md={false} lg={2}/>
        </Grid>   
    )
}


function nextVideo(dispatch, playNextVideoProvider){
    dispatch(playNextVideoProvider({}))
}
function previousVideo( dispatch, playPreviousVideoProvider){
  dispatch(playPreviousVideoProvider({}))
}

