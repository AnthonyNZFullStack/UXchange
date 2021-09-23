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
            border:'0.1em #ffcc00 solid',
            borderRadius: '3em',
            marginTop: '2em',
            padding: '0.5em 6em',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            [theme.breakpoints.only('xs')]: {
                padding: '0.3em 5em',
            },
            [theme.breakpoints.up('sm')]: {
                padding: '0.3em 5.5em',
            },
            '&:hover': {
                background: '#FFCC00',
                color: 'rgba(0,1,36,1)',
                fontWeight: 'bold',
            },
        },

    })
);



function DoneButton() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Button className={classes.root}
                variant='contained' size='large' type="submit" component={Link} to="/My items">
                Done
            </Button>

        </React.Fragment >
    );
};

export default DoneButton;