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
            background: 'rgba(0,1,36,1)',
            color: '#FFCC00',
            borderRadius: '1em',
            border: '0.1em #ffcc00 solid',
            marginTop: '2em',
            marginBottom: '1em',
            padding: '0.5em 8em',
            [theme.breakpoints.down('xs')]: {
                padding: '0.5em 5em',
            },
            '&:hover': {
                background: '#FFCC00',
                color: 'rgba(0,1,36,1)',
                fontWeight: 'bold'
            }
        },

    })
);



function LoginButton() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Button className={classes.root}
                variant='contained' size='large' type="submit">
                Log in
            </Button>

        </React.Fragment >
    );
};

export default LoginButton;