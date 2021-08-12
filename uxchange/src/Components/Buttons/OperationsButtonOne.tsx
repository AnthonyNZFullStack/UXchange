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
            color: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
            background: '#FFCC00',
            borderRadius: '1em',
            marginTop: '2em',
            marginBottom: '1em',
            padding: '1em 5em',
            fontWeight: 'bold',
            [theme.breakpoints.between('xs', 'sm')]: {
                padding: '0.5em 3em',
                display: 'block'
            },
            [theme.breakpoints.between('sm', 'md')]: {
                padding: '1em 3em',
                width: '50%',
                margin: 'auto',
                marginTop: '2em'
            },
            [theme.breakpoints.between('md', 'lg')]: {
                padding: '1em 3em',
                margin: '4em',
                marginBottom: '0'
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                padding: '1em 3em',
                marginTop: '4em',
                margin: '3em',

            },
        },

    })
);



function OperationsButtonOne() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Button className={classes.root}
                variant='contained' size='large' type="submit"
                component={Link} to="/Sign Up">
                Create account
            </Button>

        </React.Fragment >
    );
};

export default OperationsButtonOne;