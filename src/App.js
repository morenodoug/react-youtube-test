import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";


import { Grid } from "@material-ui/core";
import { Content } from "./app/components/Content";
import { NavBar } from "./app/components/NavBar";
import {SideBar} from './app/components/SideBar'


const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar/>
      <SideBar container={container}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container spacing={2}>
              <Content/>
            </Grid>
      </main>
    </div>
  );
}

export default App;
