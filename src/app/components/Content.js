import  React  from "react";
import { Grid } from "@material-ui/core";
import { VideoCard } from "./VideoCard";

export const Content =(props) =>{


    return(
        <>
            <Grid item  xs={12} sm={6} md={3}>
                <VideoCard/>
            </Grid>

            <Grid item  xs={12} sm={6} md={3}>
                <VideoCard/>
            </Grid>

            <Grid item  xs={12} sm={6} md={3}>
                <VideoCard/>
            </Grid>
            <Grid item  xs={12} sm={6} md={3}>
                <VideoCard/>
            </Grid>        
        </>
    )
}