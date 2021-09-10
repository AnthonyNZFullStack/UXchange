import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography } from '@material-ui/core'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import SignUpButton from "../../Components/Buttons/SignUpButton";
import IpostForm from "../../Components/IPostForm/IpostForm";
import DoneButton from "../../Components/Buttons/DoneButton";
import BackButton from "../../Components/Buttons/BackButtonMarket";
import BackButtonMyItem from "../../Components/Buttons/BackButtonMyItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
            backgroundColor: 'rgba(0,1,36,1)',
            color:'white',
            height: '750px',
            [theme.breakpoints.down('xl')]: {
                width: '50%',
                margin: 'auto',
                marginTop: '6.8em'
            },
            [theme.breakpoints.down('lg')]: {
                width: '50%',
                height: '770px',
                marginTop: '6em'
            },
            [theme.breakpoints.down('md')]: {
                width: '80%',
                height: '770px'
            },
            [theme.breakpoints.down('sm')]: {
                width: '80%',
                height: '770px'
            },
            [theme.breakpoints.only('xs')]: {
                width: '90%',
                margin: 'auto',
                marginTop: '5em',
                height: '670px'
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
                <BackButton />
                <BackButtonMyItem />

            </Paper>


        </React.Fragment >
    );
};

export default CreateIpost;