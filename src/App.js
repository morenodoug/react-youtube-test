import React from 'react';
import { Grid } from "@material-ui/core";
import { VideoCards } from "./app/components/VideoCard";
function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <h1>Header</h1>
      </Grid>

      <Grid item container xs={12}>

        <Grid item xs={false} sm={1}/>
        <Grid item    container   xs={12}  sm={10} spacing={1}> 
          <Grid item  xs={12} sm={3}>
            <VideoCards/>
          </Grid>
      
          <Grid item  xs={12} sm={3}>
            <VideoCards/>
          </Grid>

          <Grid item  xs={12} sm={3}>
            <VideoCards/>
          </Grid>
          <Grid item  xs={12} sm={3}>
            <VideoCards/>
          </Grid>      
        </Grid> 
        <Grid item xs={false} sm={1}/>
      </Grid>
      <Grid item container spacing={2}>
                
       

      </Grid>
    </Grid>
  );
}

export default App;
