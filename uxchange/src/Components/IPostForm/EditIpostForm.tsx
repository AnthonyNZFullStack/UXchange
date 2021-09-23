import React from "react";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: '#E0F4FF',

                [theme.breakpoints.down('xl')]: {
                    width: '50%',
                },
                [theme.breakpoints.down('xl')]: {
                    width: '70%',
                },
                [theme.breakpoints.only('md')]: {
                    width: '70%'
                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                },
                [theme.breakpoints.only('xs')]: {
                    width: '80%',
                },
            }
        },

        titleEditIpost: {
            marginTop: '1em',
            color: '#ffcc00',
            fontFamily: 'caveat brush',
            [theme.breakpoints.only('xs')]: {
                width: '100%',
                marginBottom: '1.5em',
                marginTop: '0.5em',
                fontSize: '1.8em',
            },
            [theme.breakpoints.only('sm')]: {
                marginTop: '1em',
                marginBottom: '2em',
            },
            [theme.breakpoints.only('md')]: {
                marginTop: '1em',
                marginBottom: '2em',
            },
            [theme.breakpoints.only('lg')]: {
                marginTop: '1em',
                marginBottom: '2em',
            },
            [theme.breakpoints.only('xl')]: {
                marginTop: '1em',
                marginBottom: '2em',
            },
        },
        iconStyle: {
            fontSize: '3em',
            color: '#ffcc00',
            marginRight: '0.3em',
            [theme.breakpoints.only('xs')]: {
                fontSize: '2em',
                marginBottom: '0.8em',
            },
            [theme.breakpoints.only('sm')]: {
                fontSize: '2.5em',
                marginBottom: '0.8em',
            },
            [theme.breakpoints.only('md')]: {
                fontSize: '2.5em',
                marginBottom: '0.8em',
            },
            [theme.breakpoints.only('lg')]: {
                fontSize: '2.5em',
                marginBottom: '0.8em',
            },
            [theme.breakpoints.only('xl')]: {
                fontSize: '2.5em',
                marginBottom: '0.8em',
            },
        },

    })
);



function EditIpostForm() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />

            <form className={classes.root}>

                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid item>

                        <EditIcon className={classes.iconStyle}></EditIcon>

                    </Grid>

                    <Grid item>

                        <Typography variant='h4' gutterBottom
                            className={classes.titleEditIpost}>
                            Edit your Ipost
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            variant="filled"
                            size="small"
                            label="Full name"
                            id="fullName"
                            name="fullName"
                            type="fullName" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="filled" size="small" label="" type="file"  />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="filled" size="small" label="Title" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="filled" size="small" label="Trade/Sell(price)" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="filled" size="small" label="Contacts" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="filled" size="small" label="Item description" />
                    </Grid>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default EditIpostForm;
