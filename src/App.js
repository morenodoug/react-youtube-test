import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "./app/components/NavBar";
import {SideBar} from './app/components/SideBar'
import { VideoPlayer } from "./app/components/VideoPlayer";
import {Grid} from "@material-ui/core"
import { TrendingVideos } from "./features/homeVideos/TrendingVideos";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ResultVideosComponent } from "./features/resultVideos/ResultVideosComponent";

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
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar/>
        <SideBar container={containerSide} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Grid container>    
              <Switch>

                <Route exact path="/">
                  <TrendingVideos />
                </Route>

                <Route exact path="/results">
                  <ResultVideosComponent/>
                </Route>
                <Route exact path="/player">
                  <VideoPlayer id='Y8x3LWVC1L4'/>
                </Route>                
                
              </Switch> 
            </Grid>    
        </main>
      </div>
    </Router>
  );
 
}

export default App;
