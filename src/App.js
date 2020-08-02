import React from 'react';
import { Grid } from "@material-ui/core";
import { VideoCards } from "./app/components/VideoCard";
function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <h1>Header</h1>
      </Grid>
      <Grid item container>
        <h2> content</h2>
        <VideoCards/>

      </Grid>
    </Grid>
  );
}

export default App;
