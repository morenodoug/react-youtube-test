import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
 
    media: {
      height: 120,
      width:"100%"
    },
  });
  

export const VideoCard =(props)=>{
    const classes = useStyles()

    const { title, publishedAt, channelTitle,  thumbnailSrc , viewCount, videoId} =   props
    const videoInfo = { title, publishedAt, channelTitle,  thumbnailSrc , viewCount, videoId}
    const titleToShow = formatTitle(title);
    return (
 
        <Card  variant="outlined"  draggable="true" data-video={JSON.stringify(videoInfo)}
          onDragStart={onDragStartHandler  }>
          <CardActionArea>
            <CardMedia
              className={classes.media}         
              title={title}
              image={thumbnailSrc}
            >
            </CardMedia>
            <CardContent variant="outlined">
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
               {publishedAt} Ago
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
  viewCount: PropTypes.string

}

function formatTitle(title) {
  if (title.length > 20) {
    return `${title.slice(0, 19)}...`;
  }
  return title;
}

function onDragStartHandler(e){

//  console.log(e.target.dataset.video)
  e.dataTransfer.setData("text",e.target.dataset.video)
}