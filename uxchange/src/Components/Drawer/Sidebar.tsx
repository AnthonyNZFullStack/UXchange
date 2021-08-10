import React from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import ViewListIcon from '@material-ui/icons/ViewList';
import LockIcon from '@material-ui/icons/Lock';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    color: "black",
  },
  fullList: {
    width: "auto",
  },
});

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>

      <List>
        <ListItem button href="/Home" component={Link}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        <ListItem button href="/Operations" component={Link}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Operations" />
        </ListItem>
        <ListItem button href="/My items" component={Link}>
          <ListItemIcon><ViewListIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="My items" />
        </ListItem>
        <ListItem button href="/Market place" component={Link}>
          <ListItemIcon><StorefrontIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Market place" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button href="/login" component={Link}>
          <ListItemIcon><LockIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Login" />
        </ListItem>
        <ListItem button href="/Sign up" component={Link}>
          <ListItemIcon><CreateIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Sign up" />
        </ListItem>
      </List>
    </div>
  );
};
