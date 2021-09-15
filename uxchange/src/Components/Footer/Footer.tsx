import React from "react";
import { SOCIAL_MEDIA } from "../../resources";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import SocialIcon, { SocialIconProps } from "../SocialIcon/SocialIcon";
import uxchangeLogo from "../logos/uxchange_logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: '60px',
      textAlign: "center",
      fontSize: "12px",
      color: "white",
      background: 'rgba(9,75,121,1)',
      [theme.breakpoints.only('xs')]: {
        fontSize: '0.9em'
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    content:{
      marginTop: '1em',
      [theme.breakpoints.only('xs')]: {
        display: 'flex',
        justifyContent:'space-between',
        height: '50%',
        fontSize: '0.9em',
      },
    }
  })
);

const UXCHANGE_LOGO = {
  name: "UXCHANGE logo",
  url: "",
  logo: uxchangeLogo,
};

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid item xs={6} sm={6} className={classes.content}>
          <SocialIcon {...UXCHANGE_LOGO} />
          {`UXCHANGE 2021`}
        </Grid>


        <Grid item xs={6} sm={6} className={classes.content}>
        {`Copyright © All rights reserved`}
          {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
            return (
              <SocialIcon key={icon.name} {...icon} />
            )
          })}
        </Grid>

      </Grid>
    </footer>
  );
};

export default Footer;
