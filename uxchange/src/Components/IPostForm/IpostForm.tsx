import React from "react";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: 'white',

                [theme.breakpoints.down('xl')]: {
                    width: '80%',
                },
                [theme.breakpoints.only('md')]: {
                    width: '80%'
                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                },
                [theme.breakpoints.only('xs')]: {
                    width: '80%',
                },
            }
        },
        titlePost: {
            color: '#ffcc00',
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                marginBottom: '1.5em',
                marginTop: '0.5em',
                fontSize: '1.8em',
            },
            [theme.breakpoints.only('sm')]: {
                marginTop:'1em',
                marginBottom:'2em',
            },
            [theme.breakpoints.only('md')]: {
                marginTop:'1em',
                marginBottom:'2em',
            },
            [theme.breakpoints.only('lg')]: {
                marginTop:'1em',
                marginBottom:'2em',
            },
            [theme.breakpoints.only('xl')]: {
                marginTop:'1em',
                marginBottom:'2em',
            },
        },
        iconstyle: {
            color: '#ffcc00',
            marginBottom: '1.5em',
            marginTop: '0.6em',
            marginRight: '0.5em',

            [theme.breakpoints.only('xs')]: {
                marginBottom: '1.5em',
                marginTop: '0.5em',
            },
            [theme.breakpoints.only('sm')]: {
                fontSize:'3em',
                marginBottom: '1.3em',
            },
            [theme.breakpoints.only('md')]: {
                fontSize:'3em',
                marginBottom: '1.3em',
            },
            [theme.breakpoints.only('lg')]: {
                fontSize:'3em',
                marginBottom: '1.3em',
            },
            [theme.breakpoints.only('xl')]: {
                fontSize:'3em',
                marginBottom: '1.3em',
            },

        },

    })
);



function IpostForm() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />

            <form className={classes.root}>

                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid item>

                        <AddBoxIcon className={classes.iconstyle}></AddBoxIcon>

                    </Grid>

                    <Grid item>

                        <Typography
                            className={classes.titlePost}
                            variant='h4' gutterBottom>
                            Post your Item(s)
                        </Typography>

                    </Grid>

                </Grid>

                <Grid container spacing={1}
                    style={{ marginBottom: '1.5em' }}
                >
                    <Grid item xs={12} md={12}>
                        <TextField
                            variant="filled"
                            label="Full name"
                            id="fullName"
                            name="fullName"
                            type="fullName"
                            size="small"
                        />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="filled" label="Image" size="small" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="filled" label="Title" size="small" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="filled" label="Trade/Sell(price)" size="small" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="filled" label="Contacts" size="small" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="filled" label="Item description" size="small" />
                    </Grid>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default IpostForm;
