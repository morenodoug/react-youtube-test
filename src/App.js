import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { TrendingVideos } from "./app/components/TrendingVideos";
import { NavBar } from "./app/components/NavBar";
import {SideBar} from './app/components/SideBar'
import {Grid} from "@material-ui/core"


const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function App( props) {
  const { window } = props;
  const classes = useStyles();

  const containerSide =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar/>
      <SideBar container={containerSide}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Grid container>
            <TrendingVideos />
          </Grid>
          
           
      </main>
    </div>
  );
}

export default App;
