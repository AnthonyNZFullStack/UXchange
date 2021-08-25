import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography } from '@material-ui/core'
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Buttons from "../../Components/Buttons/SignUpButton";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import SignUpButton from "../../Components/Buttons/SignUpButton";
import IpostForm from "../../Components/IPostForm/IpostForm";
import DoneButton from "../../Components/Buttons/DoneButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
            backgroundColor: 'white',
            height: '75vh',
            [theme.breakpoints.down('xl')]: {
                width: '60%',
                margin: 'auto',
                marginTop: '5em'
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                margin: 'auto',
                marginTop: '5em',
                height: '110vh'
            },
        },

    })
);

function CreateIpost() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper className={classes.pageContent}>

                <IpostForm />
                <DoneButton />

            </Paper>


        </React.Fragment >
    );
};

export default CreateIpost;