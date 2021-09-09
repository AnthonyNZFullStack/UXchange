import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography } from '@material-ui/core'
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Buttons from "../../Components/Buttons/SignUpButton";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import SignUpButton from "../../Components/Buttons/SignUpButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContent: {
            marginTop: '6.5em',
            margin: 'auto',
            padding: theme.spacing(3),
            backgroundColor: 'rgba(0,1,36,1)',
            width: '50%',
            [theme.breakpoints.down('xl')]: {
                width: '60%',
                height:'750px',
            },
            [theme.breakpoints.only('md')]: {
                width: '70%'
            },
            [theme.breakpoints.down('sm')]: {
                width: '80%',
            },
            [theme.breakpoints.only('xs')]: {
                width: '100%',
            },
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
                alignItems: 'center',
                '&:hover': {
                    color: '#ffcc00',
                }
            }
        },

        hoverButton: {
            background: 'rgba(0,1,36,1)',
            color: '#00d4ff',
            '&:hover': {
                color: '#ffcc00',
            }
        },

    })
);

function SignUp() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper className={classes.pageContent}>

                <SignUpForm />

                <Grid className={classes.rootRadial}>

                    <FormControl component="fieldset">

                        <FormLabel component="legend"></FormLabel>

                        <RadioGroup aria-label="position" name="position" defaultValue="top" style={{ color: 'white', background: '#000124' }}>

                            <FormControlLabel
                                value="end"
                                control={<Radio color="primary" />}
                                label={
                                    <Typography variant="body2"
                                        className={classes.hoverButton}>
                                        Terms and Conditions apply
                                    </Typography>}
                            />

                        </RadioGroup>

                    </FormControl>
                </Grid>

                <SignUpButton />

                <Grid >

                    <Typography variant='body2'
                        style={{ color: 'white' }}>
                        Already have an account?

                        <Button className={classes.buttonRoot}
                            style={{ backgroundColor: 'transparent', padding: '0 0', display: 'inline-block' }}
                            component={Link} to="/Login">
                            Sign in
                        </Button>

                    </Typography>

                </Grid>

            </Paper>


        </React.Fragment >
    );
};

export default SignUp;