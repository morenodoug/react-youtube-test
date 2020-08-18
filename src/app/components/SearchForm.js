import React from "react"
import { IconButton } from "@material-ui/core";
import { makeStyles ,fade} from "@material-ui/core/styles";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles( theme=> ({
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
}))
export const SearchForm = (props) =>{

    const { value,  onChange, onSubmitSearchForm} = props 
    const classes = useStyles()
    return (
      <form className={classes.search} noValidate  onSubmit={(e) =>{e.preventDefault(); onSubmitSearchForm()}}>
        <InputBase
          name="search"
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={classes.iconButton}
        >
          <SearchIcon />
        </IconButton>        
      </form>
    )
  }