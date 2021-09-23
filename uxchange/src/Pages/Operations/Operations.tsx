import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import StorefrontIcon from "@material-ui/icons/Storefront"
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import OperationsButtonOne from "../../Components/Buttons/OperationsButtonOne";
import OperationsButtonTwo from "../../Components/Buttons/OperationsButtonTwo";
// import "./Operations.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    operationBox: {
      width: '60%',
      margin: 'auto',
      [theme.breakpoints.down('xl')]: {
        height: '1100px',
      },
      [theme.breakpoints.only('lg')]: {
        height: '1150px',
      },
      [theme.breakpoints.only('md')]: {
        height: '1100px',
        width: '100%',
        margin: 'auto',
      },
      [theme.breakpoints.only('sm')]: {
        height: '1250px',
        width: '100%',
        margin: 'auto',
      },
      [theme.breakpoints.only('xs')]: {
        height: '1600px',
        width: '100%',
        margin: 'auto',
      },
    },

    root: {
      background: 'rgba(0,1,36,1)',
      marginTop: '7em',
      borderRadius: '1em',
      padding: '3em',
      color: '#fff0d6',
      height: '968px',
      [theme.breakpoints.down('xl')]: {
        height: '980px',
      },
      [theme.breakpoints.only('lg')]: {
        height: '1050px',
      },
      [theme.breakpoints.only('md')]: {
        height: '1200px',
        width: '100%',
        margin: 'auto',
      },
      [theme.breakpoints.only('sm')]: {
        height: '1300px',
        width: '100%',
        margin: 'auto',
      },
      [theme.breakpoints.only('xs')]: {
        height: '1600px',
        width: '100%',
        margin: 'auto',
      },
    },


    titleOperation: {
      fontFamily: 'caveat',
      color: '#ffcc00',
      fontWeight: 'bold',
      marginTop: '1em',
      [theme.breakpoints.down('md')]: {
        marginTop:'2em',
      },
    },
    boxOne: {
      display: 'inline-block',
      padding: '1em',
    },
    paragraphOne: {
      padding: '0 6em',
      textAlign: 'justify',
      textAlignLast: 'left',
      marginBottom: '1em',
      marginTop: '3em',
      [theme.breakpoints.down('sm')]: {
        padding: '0 1em',
      }
    },
    paragraphTwo: {
      textAlign: 'justify',
      textAlignLast: 'left',
      padding: '0 5em',
      verticalAlign: 'middle',
      [theme.breakpoints.down('sm')]: {
        padding: '0 0',
      }
    },
    iconStyling: {
      color: '#FFCC00',
      fontSize: '1.5em',
      marginTop: '0.3em'
    },
    titleOperationTwo: {
      margin: 'auto',
      marginTop: '2em',
      fontFamily: 'caveat',
      color: '#ffcc00',
      fontWeight: 'bold',
      [theme.breakpoints.down('lg')]: {
        marginTop:'2.5em',
        fontSize: '3em',
      },
      [theme.breakpoints.down('md')]: {
        marginTop:'2em',
        fontSize: '3em',
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: '2.5em',
        marginBottom:'1em'
      },
    },
    buttonOperationOne: {
      margin: 'auto',
      width: '50%',
    },
    buttonOperationTwo: {
      margin: 'auto',
      width: '50%',
    },


  })
);

function Operations() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.operationBox}>

        <Container className={classes.root} >

          <Typography className={classes.titleOperation} variant="h3" gutterBottom>
            How it works?
          </Typography>

          <Typography className={classes.paragraphOne} variant="body2" align="left">
            Have you ever wanted to get rid of your unwanted items and it just doesn’t sell? UXCHANGE has created
            a solution for you to trade your items if it doesn’t sell and that and its just a few steps away! So
            this is how it works:
          </Typography>

          <Container className={classes.boxOne}>
            <Typography className={classes.paragraphTwo} variant="body2" align="left" >
              You first go to <StorefrontIcon className={classes.iconStyling} /> ‘My store’ and post your item(s) onto the market place. You have the option to
              either sell or trade your item (incase your item doesn’t sell, you can update it to trade). This means that
              someone who is interested in your item may wish to trade for something that they have that you might
              want. It allows an opportunity to negotiate an exchange with your unwanted items and experience
              using something that could work for both parties.
            </Typography>
          </Container>

          <Container className={classes.boxOne}>
            <Typography className={classes.paragraphTwo} variant="body2" align="left" >
              To make the <SwapHorizIcon className={classes.iconStyling} /> trade work in your favour, type in what item you want, so that if a trade does occur, they
              may have it ready for trade. (You can add your wanted item in the additional information section.)
            </Typography>
          </Container>

          <Container className={classes.boxOne}>
            <Typography className={classes.paragraphTwo} variant="body2" align="center" >
              You can simply click the <DeleteIcon className={classes.iconStyling} /> delete icon, if you change your mind after posting your item online or if you have already made a transaction.
              Make sure you are deleting the right one because once you delete the item, it is permanent.
            </Typography>
          </Container>

          <Container className={classes.boxOne}>
            <Typography className={classes.paragraphTwo} variant="body2" align="center" >
              You will need to <PhonelinkRingIcon style={{ color: '#FFCC00', fontSize: '1.5em', marginTop: '0.3em', marginLeft: '0.3em' }} /> contact the owners through email or contact number
              provided on their personal information section, to sell or trade your/their item(s).
            </Typography>
          </Container>

          <Typography className={classes.titleOperationTwo} variant="h4" gutterBottom>
            Ready to start your exchange?
          </Typography>

          <Grid item
            className={classes.buttonOperationOne}>
            <OperationsButtonOne />
          </Grid>

          <Grid item
            className={classes.buttonOperationTwo}>
            <OperationsButtonTwo />
          </Grid>

        </Container>

      </div>

    </React.Fragment >
  );
};

export default Operations;