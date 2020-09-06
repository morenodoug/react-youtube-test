import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

import moment from "moment";
const useStyles = makeStyles( theme =>{
    return{
      media: {
        paddingTop: "calc(591.44 / 1127.34 * 100%)"
      },
      header:{
        padding:0
      },
      cardContent:{
        padding:  theme.spacing(1)
      }

    }

  });
  

export const VideoCard =(props)=>{
    const classes = useStyles()

    const { title, publishedAt, channelTitle,  thumbnailSrc , viewCount, videoId, removeVideoProvider} =   props
    const videoInfo = { title, publishedAt, channelTitle,  thumbnailSrc , viewCount, videoId}
    const titleToShow = formatTitle(title);

    const cardHeader = (removeVideoProvider === undefined || removeVideoProvider === null)   ? null :  createHeader(removeVideoProvider,classes) 

    return (
 
        <Card  variant="outlined"  draggable="true" data-video={JSON.stringify(videoInfo)}
          onDragStart={onDragStartHandler  }>
          {cardHeader} 
          <CardActionArea>
                      
            <CardMedia
              className={classes.media}         
              title={title}
              image={thumbnailSrc}
            >
            </CardMedia>
            <CardContent variant="outlined" classes={ {root:classes.cardContent}}>
              <Tooltip title={title} arrow>
                <Typography gutterBottom variant="h6" component="h2" noWrap={true} >
                {titleToShow}
                </Typography>
              </Tooltip>
              <Typography variant="body2" color="textSecondary" component="p">
                {channelTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {viewCount} Views
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               {moment(publishedAt, moment.ISO_8601).fromNow()} 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
   
    )
}

VideoCard.propTypes ={
  title : PropTypes.string,
  description: PropTypes.string,
  channelTitle: PropTypes.string,
  publishedAt: PropTypes.object,
  thumbnailSrc: PropTypes.string,
  viewCount: PropTypes.string,
  removeVideoProvider: PropTypes.func

}

function formatTitle(title) {
  if (title.length > 20) {
    return `${title.slice(0, 19)}...`;
  }
  return title;
}

function onDragStartHandler(e){

  e.dataTransfer.setData("text",e.target.dataset.video)
}

function createHeader( removeVideoProvider, classes){

  return (
    <CardHeader
      className={classes.header}
      disableSpacing
      action={
        <IconButton aria-label="settings" onClick={() => removeVideoProvider()}>
          <CancelIcon />
        </IconButton>
      }
    />  

  )


}

