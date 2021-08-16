import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Sidebar } from "../Drawer/Sidebar";
import { Link } from 'react-router-dom';



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
    headerColor: {
    background: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
    }
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
      <AppBar className={classes.headerColor} position="relative">
        <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
                        onClick={toggleSideBar}>
            <MenuIcon/>
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
            <Sidebar />
            </Drawer>
          </IconButton>
          <Typography className={classes.title} variant="h6" align="center">
          <Button color="inherit"
          component={Link} to="/Home">UXchange</Button>
          </Typography>
          <Button color="inherit"
          component={Link} to="/Login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;