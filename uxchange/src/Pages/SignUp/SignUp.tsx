import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Paper, Typography} from '@material-ui/core'
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
            },



    })
);

function SignUp() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
        <Paper className={classes.pageContent}>
        <SignUpForm />
        </Paper>
        </React.Fragment >
    );
};

export default SignUp;