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
        marginTop: '1em'
      },
    },
    market: {
      color: 'rgba(0,1,36,1)',
      marginTop: '5em'
    },

    fontBold: {
      // fontWeight: 'bold',
      color: 'white'
      // background: '#FFCC00',
      // borderRadius: '1em',
      // marginRight: '3em',
      // padding: '0.01em 0.5em',
      // paddingRight: '1em'
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
        height: '50em',
        width: '100%',
      },
    },

    plasmaorb: {
      [theme.breakpoints.between('lg', 'xl')]: {
        marginLeft: '40em'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginLeft: '30em'
      },

      [theme.breakpoints.between('xs', 'sm')]: {
        marginLeft: '35em'
      },
    },

    jblSpeaker: {
      // position: 'fixed',
      // top: '7em',
      // right: '30em',
      float: 'left',
      marginTop: '5em',
      filter: 'drop-shadow(10px 18px 10px #240202)',
    },

    nzonedollar: {
      float: 'left',
      marginLeft:'4em',
      marginTop: '3em',
      filter: 'drop-shadow(-12px 10px 10px #240202)',
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
            your item(s) at
          </Typography>

          <Grid style={{ width: '100%' }}>
            <div style={{ marginTop: '3em', marginLeft: '30em', position: 'sticky' }}
              id="circle"></div>
            <div id="logo">
              <UxchangeLogo />
            </div>
          </Grid>

          <Typography
            style={{ color: '#FFCC00', marginTop: '0.5em' }}
            className={classes.fontBold} variant="h2">
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
          className={classes.jblSpeaker}
          id="speaker-image"
          src={JBL} />

        <div style={{ marginLeft: '5em', marginTop: '8em' }}
          id="speaker"></div>

        <div
          className={classes.plasmaorb}
          id="plasmaOrb"></div>

        <div
          style={{ marginLeft: '10em', marginTop: '0.5em' }}
          id="coin">

          <img
            className={classes.nzonedollar}
            id="nzonedollar"
            src={nzonedollar} />
        </div>


      </div>


    </React.Fragment >
  );
};

export default HomePage;
function deg(arg0: number, deg: any): string | import("@material-ui/styles").PropsFunc<{}, string | undefined> | undefined {
  throw new Error("Function not implemented.");
}

function rotate(arg0: number, deg: (arg0: number, deg: any) => string | import("@material-ui/styles").PropsFunc<{}, string | undefined> | undefined): string | import("@material-ui/styles").PropsFunc<{}, string | undefined> | undefined {
  throw new Error("Function not implemented.");
}

