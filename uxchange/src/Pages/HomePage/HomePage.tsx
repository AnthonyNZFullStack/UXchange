import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import "./HomePage.css";
import JBL from "../Images/JBL.png";
import HomePageButton from "../../Components/Buttons/HomePageButtonOne";
import HomePageButtonTwo from "../../Components/Buttons/HomePageButtonTwo";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import UxchangeLogoFinal from "../Logo/UxchangeLogoFinal";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'rgba(0,1,36,1)',
      height: '60em',
      width: '50%',
      position: 'absolute',
      top: '3em',
      left: '0em',
      [theme.breakpoints.only('sm')]: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '65em',
        width: '100%',
      },
      [theme.breakpoints.only('xs')]: {
        position: 'absolute',
        top: '0em',
        left: '0',
        height: '70em',
        width: '100%',
        marginTop: '1em',
      },
    },
    market: {
      color: 'rgba(0,1,36,1)',
      marginTop: '5em',
    },

    fontBold: {
      color: '#fff0d6',
      fontFamily: 'Caveat Brush',
    },

    fontSize: {
      [theme.breakpoints.only('xs')]: {
        fontSize: '3.8em',
      },
    },

    fontWhiteOne: {
      marginTop: '3.5em',
      color: '#fff0d6',
      [theme.breakpoints.only('xs')]: {
        marginTop: '2em',
        color: '#fff0d6',
      },
    },

    fontWhite: {
      color: '#fff0d6',
    },

    rootTwo: {
      background: '#000124',
      height: '65em',
      width: '50%',
      position: 'absolute',
      top: '0em',
      right: '0em',
      [theme.breakpoints.only('sm')]: {
        height: '65em',
        width: '100%',
        position: 'absolute',
        top: '60em',
        left: '0em'
      },
      [theme.breakpoints.only('xs')]: {
        position: 'absolute',
        top: '60em',
        left: '0',
        height: '48em',
        width: '100%',
      },
    },

    circleOne: {
      width: '350px',
      height: '350px',
      background: '#FFCC00',
      borderRadius: '50%',
      marginTop: '4em',
      margin: 'auto',
    },

    speaker: {
      position: 'absolute',
      top: '38%',
      left: '15%',
      filter: 'drop-shadow(10px 10px 10px #240202)',
      height: '300px',
      [theme.breakpoints.only('xs')]: {
        position: 'absolute',
        top: '10%',
        left: '10%',
      },
    },

    topPage: {
      fontFamily: 'Caveat Brush',
      marginTop: '5em',
      color: '#fff0d6',
      fontStyle: 'italic',
      [theme.breakpoints.only('xs')]: {
        marginTop: '0em',
        fontSize: '25px',
        fontStyle: 'italic',
        fontFamily: 'Caveat Brush',
      },
    },

    topPageTwo: {
      color: 'rgba(0,212,255,1)',
      fontStyle: 'italic',
      fontFamily: 'Caveat Brush',
      [theme.breakpoints.only('xs')]: {
        fontSize: '25px',
        fontStyle: 'italic',
        fontFamily: 'Caveat Brush',
      },
    },

    linkIcon: {
      fontSize: '2em',
      paddingTop: '0.3em',
      color: '#fff0d6',
    },

    steps: {
      textShadow: '2px 1px black',
      color: 'rgba(0,212,255,1)',
      fontWeight: 'bold',
      background: '#000124',
      border: '0.2em #fff0d6 solid',
      borderRadius: '1em',
      padding: '0.8em 1em',
      margin: 'auto',
      marginTop: '4em',

      [theme.breakpoints.only('xl')]: {
        fontSize: '0.9em',
        width: '50%',
      },

      [theme.breakpoints.only('lg')]: {
        fontSize: '0.9em',
        width: '70%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '0.8em',
        width: '70%'
      },
    }

  })
);


function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.root}>

        <Container className={classes.market}>


          <Typography variant="h4" className={classes.fontWhiteOne}>
            You can
            <Typography className={classes.fontBold} variant="h2" component="span"> SELL</Typography>
          </Typography>

          <Typography variant="h4" style={{ marginTop: '0.2em' }} className={classes.fontWhite}>
            or
            <Typography className={classes.fontBold} variant="h2" component="span">
              TRADE
            </Typography>

          </Typography>

          <Typography style={{ marginTop: '0.2em' }} variant="h4" className={classes.fontWhite}>
            any item(s) at
          </Typography>

          <Grid style={{ width: '100%' }}>

            <div id="logo">
              <UxchangeLogoFinal />
            </div>

          </Grid>

          <Typography style={{ color: '#FFCC00', fontFamily: 'Caveat Brush', }} className={classes.fontSize} variant="h2">
            UXCHANGE!
          </Typography>

          <Grid>
            <HomePageButton />
          </Grid>

          <Grid>
            <HomePageButtonTwo />
          </Grid>


        </Container>

      </div>

      <div className={classes.rootTwo}>

        <Container>

          <Grid>

            <Typography
              className={classes.topPage}
              variant="h4">
              " Simply, a few steps to start your exchange.
            </Typography>

            <Typography className={classes.topPageTwo} variant="h4">
              That sounds easy doesn't it? "
            </Typography>

          </Grid>

          <Grid container>
            <img
              className={classes.speaker}
              id="speaker-image"
              src={JBL} />

            <div className={classes.circleOne} id="circleOne"></div>

          </Grid>

          <Grid container direction="row" alignItems="center" justifyContent="center"
            className={classes.steps}>

            <Grid item style={{ fontSize: '1.2em', marginRight: '0.5em', }}>
              Create Account
            </Grid>

            <Grid item>
              <DoubleArrowIcon className={classes.linkIcon} />
            </Grid>

            <Grid item style={{ fontSize: '1.2em', marginRight: '0.5em', marginLeft: '0.5em' }}>
              Post your Item(s)
            </Grid>

            <Grid item>
              <DoubleArrowIcon className={classes.linkIcon} />
            </Grid>

            <Grid item style={{ fontSize: '1.2em', marginLeft: '0.5em' }}>
              Sell / Trade
            </Grid>
          </Grid>

        </Container>

      </div>


    </React.Fragment >
  );
};

export default HomePage;

