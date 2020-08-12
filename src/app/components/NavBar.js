import React from "react"
import { AppBar,Toolbar , IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles ,fade} from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {setMobileOpen} from '../../features/ui/uiSlice'
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import common from "@material-ui/core/colors/common";

    
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
    searchWrapper: {
      flexGrow:1,
      display: "flex",
      alignContent: "center",
      justifyContent: "center"
    },
    search: {
      display: "flex",
      borderRadius: theme.shape.borderRadius,
      borderStyle:"solid",

      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "70%"
      }
    },
  
    inputRoot: {
      flexGrow: 1,
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        "&:focus": {
          width: "100%"
        }
      }
    },
    iconButton: {
      padding: 0
    }    
  }));

export const NavBar = (props) =>{

    const classes = useStyles();
    const dispatch = useDispatch()
    return (

    <AppBar position="fixed" className={classes.appBar} color={common.white}> 
    <Toolbar>
      <IconButton
        color=""
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(setMobileOpen({}))}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <div className={classes.searchWrapper}>

        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            className={classes.iconButton}
          >
            <SearchIcon />
          </IconButton>
        </div>

      </div>

    </Toolbar>
  </AppBar>     
 )
}