import React from "react"
import { AppBar,Toolbar , IconButton,Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";


    
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

export const NavBar = (props) =>{
    
    const { window } = props;

    const theme = useTheme();       
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    

    const classes = useStyles();
    return (
        

        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
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