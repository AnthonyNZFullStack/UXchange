import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: '#fff0d6',
            background: 'rgba(0,1,36,1)',
            borderRadius: '1em',
            border: '0.1em #ffcc00 solid',
            fontWeight: 'bold',

            [theme.breakpoints.only('xs')]: {
                padding: '0.5em 3em',
                width: '100%',
                margin: 'auto',
                marginTop: '2em'
            },
            [theme.breakpoints.only('sm')]: {
                padding: '0.5em 3em',
                width: '80%',
                margin: 'auto',
                marginTop: '2em'
            },
            [theme.breakpoints.only('md')]: {
                padding: '0.5em 3em',
                marginBottom: '0',
                width: '80%',
                marginTop: '2em'
            },
            [theme.breakpoints.only('lg')]: {
                padding: '0.5em 3em',
                marginTop: '3em',
                width: '90%',
            },
            [theme.breakpoints.only('xl')]: {
                padding: '0.5em 3em',
                marginTop: '3em',
                width: '90%',
            },
            '&:hover': {
                color: 'rgba(0,1,36,1)',
                background: '#ffcc00'
            }
        },

    })
);



function OperationsButtonOne() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Button className={classes.root}
                type="submit" component={Link} to="/Sign Up">

                Create account

            </Button>

        </React.Fragment >
    );
};

export default OperationsButtonOne;