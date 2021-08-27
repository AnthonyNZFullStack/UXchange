import React from "react";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: '#E0F4FF',

                [theme.breakpoints.down('xl')]: {
                    width: '30%',
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



function EditIpostForm() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />

            <form className={classes.root}>

                <Typography variant='h4' gutterBottom
                style={{margin: '1.5em 0'}}
                > Edit your Ipost</Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            variant="outlined"
                            label="Full name"
                            id="fullName"
                            name="fullName"
                            type="fullName" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="outlined" label="Image" />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField variant="outlined" label="Title" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="outlined" label="Trade/Sell(price)" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="outlined" label="Contacts" />
                    </Grid>

                    <Grid item xs={12} md={12} >
                        <TextField variant="outlined" label="Item description" />
                    </Grid>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default EditIpostForm;
