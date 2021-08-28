import React from "react";
import { SOCIAL_MEDIA } from "../../resources";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import SocialIcon, { SocialIconProps } from "../SocialIcon/SocialIcon";
import microsoftLogo from "../logos/microsoft_logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 60,
      textAlign: "center",
      fontSize: "12px",
      color: "white",
      background: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const MICROSOFT_LOGO = {
  name: "Microsoft logo",
  url: "https://www.microsoft.com/en-nz",
  logo: microsoftLogo,
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
        spacing={4}
      >
        <Grid item xs={4}>
          <SocialIcon {...MICROSOFT_LOGO} />
          {`UXCHANGE, 2021. Copyright © All rights reserved`}
        </Grid>
        <Grid item xs={6}>
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
