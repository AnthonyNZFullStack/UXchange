import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography } from '@material-ui/core'
import LoginForm from "../../Components/LoginForm/LoginForm";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import LoginButton from "../../Components/Buttons/LoginButton";
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      backgroundColor: '#E0F4FF',
      // width: '30vw',
      // height: '50vh',
    },

    rootRadial: {
      '& .MuiFormGroup-root': {
        backgroundColor: '#E0F4FF',
        margin: 'auto',
        paddingTop: '0.5em',
      },
      '& .MuiFormControl-root': {
        backgroundColor: '#E0F4FF',
      }
    },

    buttonRoot: {
      '& .MuiButton-label': {
        color: 'rgba(0,212,255,1)',
        textTransform: 'Capitalize',
        alignItems: 'center'
      }
    },

  })
);

function Login() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.pageContent}>

        <LoginForm />

        <Grid className={classes.rootRadial}>
        <FormControlLabel control={<Checkbox name="remeber me" />} label="Remember me" />
        <Button className={classes.buttonRoot}
              style={{ backgroundColor: 'transparent', padding: '0 1em', display: 'inline-block' }}
              component={Link} to="">
              Forgot password?
            </Button>
        </Grid>

        <LoginButton />

        <Grid >
          <Typography variant='body2'> Not a member?
            <Button className={classes.buttonRoot}
              style={{ backgroundColor: 'transparent', padding: '0 1em', display: 'inline-block' }}
              component={Link} to="/Sign Up">
              Create account
            </Button>
          </Typography>
        </Grid>

      </Paper>


    </React.Fragment >
  );
};

export default Login;