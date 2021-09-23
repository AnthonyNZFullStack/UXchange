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

            [theme.breakpoints.between('xs', 'sm')]: {
                padding: '0.5em 3em',
                width: '100%',
                margin: 'auto',
                marginTop: '1em'
            },
            [theme.breakpoints.between('sm', 'md')]: {
                padding: '0.5em 3em',
                width: '80%',
                margin: 'auto',
                marginTop: '1em'
            },
            [theme.breakpoints.between('md', 'lg')]: {
                padding: '0.5em 3em',
                marginBottom: '0',
                width: '80%',
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                padding: '0.5em 3em',
                marginTop: '2em',
                width: '90%',
            },
            '&:hover': {
                color: 'rgba(0,1,36,1)',
                background: '#ffcc00'
            }
        },

    })
);



function OperationsButtonTwo() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Button className={classes.root}
                type="submit" component={Link} to="/Market place">

                Market Place

            </Button>

        </React.Fragment >
    );
};

export default OperationsButtonTwo;