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
            background: 'rgba(0,1,36,1)',
            border:'0.1em #ffcc00 solid',
            borderRadius: '1em',
            marginTop: '2em',
            padding: '0.5em 8em',
            fontWeight: 'bold',
            [theme.breakpoints.down('xs')]: {
                padding: '0.5em 6em',
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
                Done
            </Button>

        </React.Fragment >
    );
};

export default LoginButton;