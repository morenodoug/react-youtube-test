import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles , useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button"
import { setMobileOpen ,isMobileOpen} from "../../features/ui/uiSlice";
import { addVideo , getPlayListVideosSelector, startPlayingList} from "../../features/playList/playListSlice";
import { isVideoPlayerOpenSelector} from "../../features/videoPlayer/VideoPLayerSlice"
import { VideoCard } from "../components/VideoCard";


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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    playButton:{
      marginTop:"8px"
    }
  }));    

export const SideBar =(props) =>{

    const classes = useStyles();
    const theme = useTheme();
    const {container} = props
    const dispatch = useDispatch() 
    const mobileOpen = useSelector(isMobileOpen)
    const playListVideos = useSelector(getPlayListVideosSelector)
    const isVideoPlayerOpen =useSelector(isVideoPlayerOpenSelector)
    const videoCards = playListVideos.map(createVideoCard )   
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
          <Button 
            disabled = {isVideoPlayerOpen}
            variant="contained" 
            color="primary" 
            size="medium" className={classes.playButton} 
            onClick={()=> {alert("oli"); dispatch(startPlayingList({}))}} >  play</Button>
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

function createVideoCard(video){

  return <VideoCard   
          description = {video.description}
          title ={video.title}
          channelTitle ={video.channelTitle} 
          viewCount ={video.viewCount}
          thumbnailSrc ={video.thumbnailSrc}
          videoId={video.videoId}
          key={`list-${video.videoId}`}
  />;
}
