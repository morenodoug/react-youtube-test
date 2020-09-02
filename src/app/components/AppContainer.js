import React from 'react'
import Grid from "@material-ui/core/Grid"

export const  AppContainer =(props) =>{

    return(

        <Grid container  justify="space-evenly">    
            <Grid item xs={2} sm={2}  md={false} lg={false} />
            <Grid item container xs={8} sm={8} md={12}   spacing={1}   justify="space-evenly"  >
                    {props.children}
             
            </Grid>
            <Grid item xs={2} sm={2}  md={false} lg={false}/>
        </Grid>
  
        

    )
}