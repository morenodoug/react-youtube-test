import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
 
    media: {
      height: 120,
      width:"100%"
    },
  });
  

export const VideoCards =(props)=>{
    const classes = useStyles()

    const description =   `"These Guys Again ("Up" But Everything Is Even Worse 12312321312)123123123123123"`.substr(0,25)
    return (
        <div onClick={() => alert("holi")}>

          
          <Card  variant="outlined">
          <CardActionArea>
            <CardMedia
              className={classes.media}         
              title="Contemplative Reptile"
              image="https://i.ytimg.com/vi/ouOPC_KjIW4/mqdefault.jpg"
            >
            </CardMedia>
            <CardContent variant="outlined">
              <Typography gutterBottom variant="h6" component="h2" noWrap={true} >
              {description}
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
      </div>
    )


}