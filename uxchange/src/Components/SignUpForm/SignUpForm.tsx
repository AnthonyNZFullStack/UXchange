import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, Typography } from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: 'white',

                [theme.breakpoints.down('xl')]: {
                    width: '50%'
                },
                [theme.breakpoints.only('md')]: {
                    width: '70%'
                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                },
                [theme.breakpoints.only('xs')]: {
                    width: '90%',
                },
            }
        },
        contactsIcon:{
            marginTop: '1em', 
            color: '#ffcc00', 
            fontSize: '5em',
            [theme.breakpoints.only('xs')]: {
                marginTop: '0.5em', 
            },
        }

    })
);



function SignUpForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <form className={classes.root}>

                <Grid>
                    <ContactsIcon className={classes.contactsIcon}></ContactsIcon>
                </Grid>

                <Typography variant='h3' gutterBottom
                    style={{ color: '#ffcc00', fontFamily: 'caveat' }}
                > Create Account</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            label="Full Name"
                            variant="filled"
                            id="fullName"
                            name="fullName"
                            type="fullName" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            label="Full Name"
                            variant="filled" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField 
                        variant="filled" 
                        label="Username" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField 
                        variant="filled" 
                        label="Password" />
                    </Grid>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default SignUpForm;
