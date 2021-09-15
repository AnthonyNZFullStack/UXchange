import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Sidebar } from "../Drawer/Sidebar";
import { Link } from 'react-router-dom';
import uxchangeLogo from "../logos/uxchange_logo.svg";
import SocialIcon from "../SocialIcon/SocialIcon";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: '0 0',
      padding: '0 0'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    headerColor: {
      background: 'rgba(9,75,121,1)',
    },
    uxchangeButton: {
      background: 'none',
      '& .MuiButtonBase-root': {
        padding: '0',
        background: 'none',
      },
      // '&:hover':{
      //   background:'#000124',
      //   borderRadius: '3em',
      //   padding: '0em 4em',
      // },
    },
    hange:{
      color: '#ffcc00', 
      fontFamily: 'caveat brush', 
      fontSize: '28px',
      marginTop: '0.1em',
      textTransform: 'uppercase',
      borderRadius: '3em',
    },
    loginButton:{
      borderRadius: '3em',
      textTransform: 'capitalize',
      width: '10%',
      padding: '0.5em 4em',
      color:'white',
      [theme.breakpoints.only('xs')]:{
        padding: '0.3em 2em',
      },
      '&:hover':{
        background:'#000124',
        borderRadius: '3em',
        width: '10%',
        color: '#ffcc00',
        padding: '0.5em 4em',
        [theme.breakpoints.only('xs')]:{
          padding: '0.3em 2em',
        },
      },
    },
  })
);

function Header() {
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const UXCHANGE_LOGO = {
    name: "UXCHANGE logo",
    url: "",
    logo: uxchangeLogo,
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.headerColor} position="fixed">

        <Toolbar>

          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
            onClick={toggleSideBar}>
            <MenuIcon />

            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>

              <Sidebar />

            </Drawer>

          </IconButton>

          <Typography className={classes.title}>

            <Button className={classes.uxchangeButton}
              component={Link} to="/Home">
              <SocialIcon {...UXCHANGE_LOGO} />
              <Typography className={classes.hange}>Hange</Typography>
            </Button>

          </Typography>

          <Button className={classes.loginButton}
            component={Link} to="/Login">Login</Button>

        </Toolbar>

      </AppBar>
    </div>
  );
}

export default Header;