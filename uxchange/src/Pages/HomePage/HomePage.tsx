import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Container } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '15em',
      background: '#E0F4FF'
    },
    market: {
      color: 'rgba(0,1,36,1)',
    },
    fontBold: {
      fontWeight: 'bold',
      background:'#FFCC00',
      borderRadius: '1em',
      marginRight: '3em',
      padding: '0.01em 0.5em',
      paddingRight: '1em'
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
      <Typography variant="h2"> You can
        <Typography className={classes.fontBold} variant="h2" component="span"> SELL</Typography>
      </Typography>
      <Typography variant="h2"> or
        <Typography className={classes.fontBold} variant="h2" component="span"
        > TRADE</Typography>
      </Typography>
      <Typography variant="h2">
        your item(s) at
      </Typography>
      <Typography className={classes.fontBold} variant="h2">
        UXchange!
      </Typography>
      </Container>

      </div>


    </React.Fragment >
  );
};

export default HomePage;
