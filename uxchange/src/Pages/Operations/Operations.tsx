import React from "react";
import { Typography, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import StorefrontIcon from "@material-ui/icons/Storefront"
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
      marginTop: '6em',
      marginBottom: '10em',
      minHeight: '100vh',
      borderRadius: '3em',
      padding: '3em',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        color: 'white',
      }
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
        color: 'salmon',
        padding: '0 0',
      }
    },
    iconStyling: {
      color: '#FFCC00',
      fontSize: '1.5em',
      marginTop: '0.3em'
    },
    buttonBox: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '2em 5em',
        width: '75%'
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '2em 5em'
      },
      [theme.breakpoints.only('xs')]: {
        display: 'block',
        fontSize: '0.3rem',
        padding: '0 0',
        maxWidth: '100%'
      }
    },
  })
);

function Operations() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth="lg" >

        <Typography style={{ marginTop: '1em' }} variant="h3" gutterBottom>
          How it works?
        </Typography>

        <Typography className={classes.paragraphOne} variant="body2" align="left">
          Have you ever wanted to get rid of your unwanted items and it just doesn’t sell? UXchange has created
          a solution for you to trade your items if it doesn’t sell and that and its just a few steps away! So
          this is how it works:
        </Typography>

        <Container className={classes.boxOne}>
          <Typography className={classes.paragraphTwo} variant="body2" align="left" >
            You first go to <StorefrontIcon className={classes.iconStyling} /> ‘My store’ and add your unwanted items onto the market place. You have the option to
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
            Make sure you are deleting the right one because once you delete item, it is gone permanently.
          </Typography>
        </Container>

        <Container className={classes.boxOne}>
          <Typography className={classes.paragraphTwo} variant="body2" align="center" >
            You will need to <PhonelinkRingIcon style={{ color: '#FFCC00', fontSize: '1.5em', marginTop: '0.3em', marginLeft: '0.3em' }} /> contact the owners through email or contact number
            provided on their personal information section, to sell or trade your/the items.
          </Typography>
        </Container>

        <Typography style={{ marginTop: '2em' }} variant="h3" gutterBottom>
          Ready to start your exchange?
        </Typography>

        <Container className={classes.buttonBox}>
          <Button
            component={Link} to="/My items"
            style={{ borderRadius: '1em', marginTop: '3em', backgroundColor: '#FFCC00', fontWeight: 'bold' }}
            variant='contained' size='large' type="submit">
            Post my item</Button>
          <Button style={{ borderRadius: '1em', marginTop: '3em', backgroundColor: '#FFCC00', fontWeight: 'bold' }}
            component={Link} to="/Market place"
            variant='contained' size='large'>
            Market place</Button>
        </Container>
      </Container>
    </React.Fragment >
  );
};

export default Operations;