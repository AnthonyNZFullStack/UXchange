import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography } from '@material-ui/core'
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Buttons from "../../Components/Buttons/Buttons";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

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
                            <RadioGroup aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel value="end" control={<Radio color="primary" />} label={<Typography variant="body2" color="textSecondary"> Terms and Conditions apply</Typography>} />
                            </RadioGroup>
                        </FormControl>
                </Grid>

                <Buttons />

                <Grid >
                    <Typography variant='body2'> Already have an account?
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