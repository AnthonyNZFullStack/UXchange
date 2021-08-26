import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: '#FFCC00',
            background: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
            borderRadius: '1em',
            marginTop: '1em',
            padding: '0.5em 4.95em',
            [theme.breakpoints.down('xs')]: {
                padding: '0.5em 2.95em',
            },
            '&:hover': {
                background: '#FFCC00',
                color: 'rgba(0,1,36,1)',
                fontWeight: 'bold'
            }
        },
        iconstyle: {
            position: 'absolute',
            left: '0.5em',
        },

    })
);



function BackButtonMarket() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid>
            <Button className={classes.root}
                variant='contained' size='large' type="submit"
                component={Link} to="/Market Place">
                Back to Market<ArrowBackIcon className={classes.iconstyle}></ArrowBackIcon>
            </Button>
            </Grid>

        </React.Fragment >
    );
};

export default BackButtonMarket;