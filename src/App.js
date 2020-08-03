import React from 'react';
import { Grid } from "@material-ui/core";
import { Content } from './app/components/Content';
function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <h1>Header</h1>
      </Grid>

      <Grid item container xs={12}>

        <Grid item xs={false} sm={1}/>
        <Grid item    container   xs={12}  sm={10} spacing={1}>    
          <Content/>   
        </Grid> 
        <Grid item xs={false} sm={1}/>
      </Grid>
      <Grid item container spacing={2}>
                
       

      </Grid>
    </Grid>
  );
}

export default App;
