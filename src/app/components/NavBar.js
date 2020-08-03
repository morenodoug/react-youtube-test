import React from "react"
import { AppBar,Toolbar , IconButton,Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {setMobileOpen} from '../../features/ui/uiSlice'


    
const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
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
  }));

export const NavBar = (props) =>{

    const classes = useStyles();
    const dispatch = useDispatch()
    return (

    <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(setMobileOpen({}))}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Responsive drawer
      </Typography>
    </Toolbar>
  </AppBar>     
 )
}