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
import EditPostForm from "../../Components/IPostForm/EditIpostForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContent: {
            margin: theme.spacing(10),
            padding: theme.spacing(3),
            backgroundColor: 'white',
            height: '85vh',
            [theme.breakpoints.down('xl')]: {
                width: '60%',
                margin: 'auto',
                marginTop: '10em'
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                margin: 'auto',
                marginTop: '5em',
                height: '130vh'
            },
        },

    })
);


function EditIpost() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper
            className={classes.pageContent}>

                <EditPostForm />
                <DoneButton />
                <BackButton />
                <BackButtonMyItem />

            </Paper>


        </React.Fragment >
    );
};

export default EditIpost;