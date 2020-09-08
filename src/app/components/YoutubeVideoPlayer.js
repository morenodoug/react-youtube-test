import React, {  useEffect, useState} from 'react'
import { YOUTUBE_IFRAME_API } from "../utils/Constants";
import { PropTypes } from "prop-types";

export const YoutubeVideoPlayer = (props) =>{
    const {playingVideoId, playNextVideoProvider, parentDivId} = props
    const changeStatushandler = createOnStateChange(playNextVideoProvider)    
    const [playerState, setPlayerState] = useState(null)
    const loadVideo = () => {
        // the Player object is created uniquely based on the id in props
        const player = new window.YT.Player( parentDivId , {
          videoId: playingVideoId,
          events: {

            'onStateChange': changeStatushandler,
            'onReady':onPlayerReady,
            height: '168',
            width: '300',
          }          
        });
        if (playerState == null){
          setPlayerState(player)
        }    
    };
    useEffect(() => {
      if (!window.YT) { // If not, load the script asynchronously
        addScriptPlayerYoutubeApi(loadVideo)
 
      } else { // If script is already there, load the video directly
        loadVideo();
  
      }
    },[])

    useEffect(() => {
      if(playerState !== null){
        playerState.loadVideoById(playingVideoId)
      }

    },[playingVideoId])    

  
    return(<></>
      

    )
}
YoutubeVideoPlayer.propTypes ={
  playingVideoId: PropTypes.string,
  playNextVideoProvider: PropTypes.func, 
  parentDivId: PropTypes.string

}

function  addScriptPlayerYoutubeApi(loadVideoProvider){
  const tag = document.createElement('script');
  tag.src = YOUTUBE_IFRAME_API;
  // onYouTubeIframeAPIReady will load the video after the script is loaded
  window.onYouTubeIframeAPIReady = loadVideoProvider;
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}



function createOnStateChange(playNextVideoProvider){
  return(event) =>{
    if (event.data === window.YT.PlayerState.ENDED){
      playNextVideoProvider()
    }
  }
}

function onPlayerReady(event) {  
  event.target.playVideo();

}

