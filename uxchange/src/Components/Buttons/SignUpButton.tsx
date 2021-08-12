import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: '#FFCC00',
            background: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
            borderRadius: '1em',
            marginTop: '2em',
            marginBottom: '1em',
            padding: '0.5em 8em',
            [theme.breakpoints.down('xs')]: {
                padding: '0.5em 5em',
            },
        },
        iconstyle: {
            position: 'absolute',
            right: '0.5em',
        },

    })
);



function SignUpButton() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Button className={classes.root}
                variant='contained' size='large' type="submit">
                Sign up<ArrowForwardIcon className={classes.iconstyle}></ArrowForwardIcon>
            </Button>

        </React.Fragment >
    );
};

export default SignUpButton;