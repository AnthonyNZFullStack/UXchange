import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import DoneButton from "../../Components/Buttons/DoneButton";
import { Grid } from "@material-ui/core";
import "./HomePage.css";
import UxchangeLogo from "../Logo/UxchangeLogo";
import JBL from "../Images/JBL.png";
import nzonedollar from "../Images/nzonedollar.png";
import plasmaorb from "../Images/plasmaorb.png";
import view from "../Images/view.png";
import HomePageButton from "../../Components/Buttons/HomePageButton";


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
      color: 'white'
    },

    fontWhite: {
      color: 'white',
    },

    rootTwo: {
      background: 'rgba(0,1,36,1)',
      height: '60em',
      width: '50%',
      position: 'absolute',
      top: '3em',
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
        height: '60em',
        width: '100%',
      },
    },

    // plasmaorb: {
    //   [theme.breakpoints.up('md')]: {
    //     marginLeft: '50em'
    //   },
    //   [theme.breakpoints.between('sm', 'md')]: {
    //     marginLeft: '30em'
    //   },
    //   [theme.breakpoints.between('xs', 'sm')]: {
    //     marginLeft: '35em',
    //   },
    //   [theme.breakpoints.only('xs')]: {
    //     height: '100px'
    //   },
    // },


    // nzonedollar: {
    //   float: 'left',
    //   marginLeft: '3em',
    //   marginTop: '3em',
    //   filter: 'drop-shadow(-12px 10px 10px #240202)',
    // },

    uxchangelogo: {
      height: '200px',
      '&:hover': {
        color: 'white',
      }
    },

  })
);


function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.root}>

        <Container className={classes.market}>


          <Typography variant="h4"
            style={{ marginTop: '6em' }}
            className={classes.fontWhite}> You can
            <Typography className={classes.fontBold} variant="h3" component="span"> SELL</Typography>
          </Typography>

          <Typography variant="h4"
            style={{ marginTop: '0.2em' }}
            className={classes.fontWhite}> or
            <Typography className={classes.fontBold} variant="h3" component="span"
            > TRADE</Typography>
          </Typography>

          <Typography
            style={{ marginTop: '0.2em' }}
            variant="h4" className={classes.fontWhite}>
            any item(s) at
          </Typography>

          <Grid style={{ width: '100%' }}>

            {/* <img id="uxchangelogo" className={classes.uxchangelogo} src={Uxchangelogo} alt="uxchange logo"></img> */}

            <div id="logo">
              <UxchangeLogo />
            </div>
          </Grid>

          <Typography
            style={{ color: '#FFCC00', marginTop: '1em' }}
            className={classes.fontBold} variant="h3">
            UXCHANGE!
          </Typography>


        </Container>

        {/* <Grid>
          <DoneButton />
        </Grid>
        <Grid>
          <DoneButton />
        </Grid> */}

      </div>

      <div className={classes.rootTwo}>

        <img
          style={{ filter: 'drop-shadow(10px 10px 10px #240202)' }}
          id="speaker-image"
          src={JBL} />

        <div id="circleOne"></div>

        <Typography
          style={{ color: 'white', maxWidth: '50%', position: 'absolute', top: '3em', left: '4em', textAlign: 'left' }}
          variant="h4">
          " Doesn't sell? Now you can trade items! That sounds easy doesn't it? "</Typography>

        <Typography style={{ color: 'white', maxWidth: '50%', position: 'absolute', top: '20em', right: '18.5em', textAlign: 'left' }}>
          Options
        </Typography>

        <img
          style={{ height: '400px', position: 'absolute', top: '25em', right: '0.3em' }}
          className="view"
          id="view"
          src={view} />

        <Grid style={{ position: 'absolute', marginTop: '4em', marginLeft: '-1em'  }}>
          <HomePageButton />
        </Grid>

        {/* <div
          className={classes.plasmaorb}
          id="circleSecond">

          <Typography
            style={{ color: 'white', maxWidth: '50%', position: 'absolute', top: '8.5em', right: '8em' }}
            variant="h3"
          > Experience change</Typography>

          <img
            style={{ filter: 'drop-shadow(10px 3px 7px #240202)', marginLeft: '-5em' }}
            id="plasmaOrb"
            src={plasmaorb} />

        </div> */}

        {/* <div id="circleThird">

          <Typography
            style={{ color: 'white', maxWidth: '50%', position: 'absolute', top: '14em', left: '5em' }}
            variant="h3"
          > Join with us now!</Typography>

          <img
            className={classes.nzonedollar}
            id="nzonedollar"
            src={nzonedollar} />
        </div> */}


      </div>


    </React.Fragment >
  );
};

export default HomePage;

