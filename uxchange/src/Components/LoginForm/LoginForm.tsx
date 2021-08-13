import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: 'white',

                [theme.breakpoints.down('xl')]: {
                    width: '30%'
                },
                [theme.breakpoints.only('md')]: {
                    width: '40%'
                },
                [theme.breakpoints.down('sm')]: {
                    width: '60%',
                },
                [theme.breakpoints.only('xs')]: {
                    width: '100%',
                },
            }
        },

    })
);



function LoginForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <form className={classes.root}>

                <Typography variant='h4' gutterBottom
                style={{margin: '1.5em 0'}}
                > Login</Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            variant="outlined"
                            label="Username"
                            id="Username"
                            name="Username"
                            type="Username" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="outlined" label="Password" />
                    </Grid>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default LoginForm;
