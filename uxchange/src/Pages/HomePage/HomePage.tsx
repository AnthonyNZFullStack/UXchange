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
      background: '#E0F4FF',
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


          <Typography variant="h4"
            style={{ marginTop: '8em' }}
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

          <Typography
            style={{ color: '#FFCC00', marginTop: '0.5em' }}
            className={classes.fontBold} variant="h3">
            UXCHANGE!
          </Typography>


        </Container>

        <Grid>
          <DoneButton />
        </Grid>
        <Grid>
          <DoneButton />
        </Grid>

      </div>

      <div className={classes.rootTwo}>
        <Typography variant="h6"
          style={{ color: 'black', marginTop: '10em' }}>
          Testing right side</Typography>
      </div>


    </React.Fragment >
  );
};

export default HomePage;
