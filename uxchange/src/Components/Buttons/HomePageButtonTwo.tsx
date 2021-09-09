import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: '#fff0d6',
            background: 'rgba(0,1,36,1)',
            borderRadius: '1em',
            marginTop: '1em',
            padding: '0.5em 4em',
            width: '40%',
            letterSpacing:'1px',
            textTransform: 'capitalize',
            border: '2px #FFCC00 solid',
            fontWeight: 'bold',
            [theme.breakpoints.only('xs')]: {
                padding: '0.5em 2em',
                width: '100%',
            },
            [theme.breakpoints.only('sm')]: {
                padding: '0.5em 2em',
                width: '60%',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                padding: '0.5em 4em',
                width: '60%',
            },
            [theme.breakpoints.only('md')]: {
                padding: '0.5em 4em',
                width: '60%',
            },
            [theme.breakpoints.only('lg')]: {
                padding: '0.5em 2em',
                width: '50%'
            },
            '&:hover': {
                background: '#FFCC00',
                color: 'rgba(0,1,36,1)',
                fontWeight: 'bold',
                padding: '1em 4em',
                [theme.breakpoints.only('xs')]: {
                    padding: '0.5em 4em',
                    width: '100%',
                },
                [theme.breakpoints.only('sm')]: {
                    padding: '0.5em 4em',
                    width: '50%',
                },
                [theme.breakpoints.between('sm', 'md')]: {
                    padding: '0.5em 4em',
                    width: '60%',
                },
                [theme.breakpoints.only('md')]: {
                    padding: '0.5em 4em',
                    width: '60%',
                },
                [theme.breakpoints.only('lg')]: {
                    padding: '0.5em 2em',
                    width: '50%'
                },
                [theme.breakpoints.only('xl')]: {
                    padding: '0.5em 4em',
                    width: '40%'
                },
            }
        },

    })
);



function HomePageButtonTwo() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Button className={classes.root}
            component={Link} to="/Operations"
                variant='contained' size='large' type="submit">
                How do we operate?
            </Button>

        </React.Fragment >
    );
};

export default HomePageButtonTwo;