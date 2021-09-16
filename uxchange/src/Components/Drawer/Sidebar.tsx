import React from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import ViewListIcon from '@material-ui/icons/ViewList';
import LockIcon from '@material-ui/icons/Lock';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '960px',
    background: '#000124',
    // borderRight: '5px #000124 solid',
  },
  listText: {
    color: 'white',
    '&:hover': {
      color: '#ffcc00',
    },
  },
  listIcon: {
    color: 'white',
    '&:hover': {
      color: '#ffcc00',
    },
  },
  fullList: {
    width: 'auto',
  },
  menuFont: {
    color: '#ffcc00',
    fontFamily: 'caveat',
    marginLeft: '0.8em',
  },
  menuIcon: {
    color: '#ffcc00',
  },
  titleLine: {
    background: 'rgba(9,75,121,1)',
    height: '64px',
  },
});

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>

      <ListItem className={classes.titleLine}>
        <MenuIcon className={classes.menuIcon}></MenuIcon>
        <Typography variant="h4" className={classes.menuFont}>Menu</Typography>
      </ListItem>

      <List>

        <ListItem style={{ marginTop: '2em' }} className={classes.listText} button href="/Home" component={Link}>
          <ListItemIcon className={classes.listIcon}><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem className={classes.listText} button href="/Operations" component={Link}>
          <ListItemIcon className={classes.listIcon}><InfoIcon /></ListItemIcon>
          <ListItemText primary="Operations" />
        </ListItem>

        <ListItem className={classes.listText} button href="/My items" component={Link}>
          <ListItemIcon className={classes.listIcon}><ViewListIcon /></ListItemIcon>
          <ListItemText primary="My items" />
        </ListItem>

        <ListItem className={classes.listText} button href="/Market place" component={Link}>
          <ListItemIcon className={classes.listIcon}><StorefrontIcon /></ListItemIcon>
          <ListItemText primary="Market place" />
        </ListItem>

      </List>


      <List>

        <ListItem style={{ borderTop: '0.5px white solid' }} className={classes.listText} button href="/Login" component={Link}>
          <ListItemIcon className={classes.listIcon}><LockIcon /></ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>

        <ListItem className={classes.listText} button href="/Sign up" component={Link}>
          <ListItemIcon className={classes.listIcon}><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Sign up" />
        </ListItem>

      </List>

    </div>
  );
};
