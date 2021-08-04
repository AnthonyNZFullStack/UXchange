import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Sidebar } from "../Drawer/Sidebar";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function Header() {
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
                        onClick={toggleSideBar}>
            <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
            <Sidebar />
            </Drawer>
          </IconButton>
          <Typography className={classes.title} variant="h6" align="center">
            UXchange
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;