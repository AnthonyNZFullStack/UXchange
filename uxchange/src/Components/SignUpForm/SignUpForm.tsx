import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, FormGroup, Typography, Container, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                width: '50%',
                [theme.breakpoints.down('sm')]: {
                    width: '100%'
                  }
            }
        },

    })
);



function SignUpForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <form className={classes.root}>

                <Grid>
                    <Typography variant='h4' gutterBottom> Sign up now</Typography>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField 
                        variant="outlined" 
                        label="First name" 
                        id="firstname"
                        name="firstname"
                        type="firstname"/>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="outlined" label="Last name" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="outlined" label="Email ( e.g. JohnDoe@gmail.com )" />
                    </Grid>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default SignUpForm;
