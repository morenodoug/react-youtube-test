import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

export const VideoCards =(props)=>{
    const classes = useStyles()
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
           
            title="Contemplative Reptile"
            image="https://i.ytimg.com/vi/ouOPC_KjIW4/hqdefault.jpg"
          >

          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2" noWrap={true} >
            These Guys Again ("Up" But Everything Is Even Worse 12312321312)123123123123123
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Danny Gonzalez
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              1236232 Views
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              2020-07-31T18:27:52Z Ago
            </Typography>
            
          </CardContent>
        </CardActionArea>
      </Card>
    )


}