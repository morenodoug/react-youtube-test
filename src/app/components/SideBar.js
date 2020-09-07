import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles , useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from "@material-ui/core/Button"
import YouTubeIcon from '@material-ui/icons/YouTube';
import Typography from '@material-ui/core/Typography';
import { setMobileOpen ,isMobileOpen} from "../../features/ui/uiSlice";
import { addVideo , getPlayListVideosSelector, startPlayingList, removeVideo} from "../../features/playList/playListSlice";
import { isVideoPlayerOpenSelector} from "../../features/videoPlayer/VideoPLayerSlice"
import { VideoCard } from "../components/VideoCard";
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory  } from "react-router-dom";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    // necessary for content to be below app bar
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'center',
    },    
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    playButtonWrapper:{
      display:"flex",
      justifyContent:"center",
      marginTop:"8px"
    },
    logo:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }
  }));    

export const SideBar =(props) =>{

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory()
    const {container} = props
    const dispatch = useDispatch() 
    const mobileOpen = useSelector(isMobileOpen)
    const playListVideos = useSelector(getPlayListVideosSelector)
    const isVideoPlayerOpen =useSelector(isVideoPlayerOpenSelector)
    const videoCards = playListVideos.map(  (video) => createVideoCard(video, dispatch) )   

    const drawer = (
      <div>
        <div className={classes.drawerHeader} >
     
              <YouTubeIcon color="secondary" fontSize="large"/>
              <Typography variant="h5">IuTube</Typography>
     
        </div>
        <Divider />
          <div className={classes.playButtonWrapper}>
            <Button 
              disabled = {isVideoPlayerOpen || playListVideos.length === 0}
              variant="contained" 
              color="primary" 
              size="medium" 
              endIcon={<PlayArrowIcon/>}
              onClick={ () => startPlayingVideoList(history, dispatch, startPlayingList)} >  play
            </Button>            

          </div>

        <List>
          {videoCards}
        </List>
  
      </div>
    );    

    return (
   
        <nav className={classes.drawer} aria-label="mailbox folders" 
         onDragOver={allowDrop}
         onDrop={(event) =>{ dropHandler(event, dispatch)}} >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={mobileOpen}
                    onClose={ () => dispatch(setMobileOpen({}))}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    open
                    >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>        
    )
}

function allowDrop(ev) {
  ev.preventDefault();

}

function dropHandler(ev, dispatch) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const videoData = JSON.parse(data)
  if(videoData.videoId === undefined )
    return 
  
  dispatch(addVideo({video:videoData}))
  
}

function startPlayingVideoList(historyProvider, dispatch,startPlayingListProvider ){
  
  dispatch(startPlayingListProvider())
  .then(unwrapResult)
  .then(result => historyProvider.push("/player") )
  .catch(serializedError =>  alert("mejor no redirecciono"))
}

function createVideoCard(video, dispatch){

  return <VideoCard   
          description = {video.description}
          title ={video.title}
          channelTitle ={video.channelTitle} 
          viewCount ={video.viewCount}
          thumbnailSrc ={video.thumbnailSrc}
          videoId={video.videoId}
          key={`list-${video.videoId}`}
          publishedAt ={video.publishedAt}
          removeVideoProvider = { () => (dispatch(removeVideo({videoId:video.videoId}))) }
  />;
}
