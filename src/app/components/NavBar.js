import React from "react"
import { AppBar,Toolbar , IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles ,fade} from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {setMobileOpen} from '../../features/ui/uiSlice'
import {useState} from "react"
import { useHistory  } from "react-router-dom";
import { SearchForm } from "./SearchForm";
    
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
    }  
  }));

export const NavBar = (props) =>{

    const classes = useStyles();
    const dispatch = useDispatch()
    const  [searchQuery, setSearchQuery] = useState("")
    const history = useHistory();
    return (

  <AppBar position="fixed" className={classes.appBar} color="default" title="HOME">  
    <Toolbar>
      <IconButton
       
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(setMobileOpen({}))}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <div className={classes.searchWrapper}>
        <SearchForm   value={searchQuery} onChange={setSearchQuery} onSubmitSearchForm={ () => onSubmitSearchForm(searchQuery,history)}/>
      </div>
    </Toolbar>
  </AppBar>     
 )
}

function onSubmitSearchForm( searchQuery, history){

  const cleanSearchQuery = searchQuery.trim()
  if(cleanSearchQuery.length >0 )
    history.push(`/results/?search_query=${cleanSearchQuery}`)

}

