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
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddBoxIcon from "@material-ui/icons/AddBox";

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
          <ListItemIcon><ArrowUpwardIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Operations" />
        </ListItem>
        <ListItem button href="/My items" component={Link}>
          <ListItemIcon><ArrowUpwardIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="My items" />
        </ListItem>
        <ListItem button href="/Market place" component={Link}>
          <ListItemIcon><ArrowUpwardIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Market place" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button href="/login" component={Link}>
          <ListItemIcon><AddBoxIcon /></ListItemIcon>
          <ListItemText className={classes.listText} primary="Login" />
        </ListItem>
      </List>

    </div>
  );
};
