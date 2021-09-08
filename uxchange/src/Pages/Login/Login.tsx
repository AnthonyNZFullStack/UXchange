import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography } from '@material-ui/core'
import LoginForm from "../../Components/LoginForm/LoginForm";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContent: {
      marginTop: '11em',
      margin: 'auto',
      padding: theme.spacing(3),
      backgroundColor: 'rgba(0,1,36,1)',
      width: '40%',
      height: '650px',
      // width: '30vw',
      // height: '50vh',
      [theme.breakpoints.down('xl')]: {
        width: '50%'
    },
    [theme.breakpoints.down('md')]: {
        width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '80%',
    },
    [theme.breakpoints.only('xs')]: {
        width: '90%',
        marginTop: '5.5em',
    },
    },

  })
);

function Login() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        className={classes.pageContent}>

        <LoginForm />

      </Paper>


    </React.Fragment >
  );
};

export default Login;