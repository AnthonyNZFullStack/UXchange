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
            color: '#fff0d6',
            background: 'rgba(0,1,36,1)',
            marginBottom: '1em',
            padding: '0.5em 4.65em',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            [theme.breakpoints.down('xs')]: {
                padding: '0.3em 2.45em',
            },
            [theme.breakpoints.up('xs')]: {
                padding: '0.5em 2.4em',
            },
            '&:hover': {
                background: 'rgba(0,1,36,1)',
                color: '#FFCC00',
                fontWeight: 'bold',
            }
        },
        iconstyle: {
            position: 'absolute',
            left: '0.1em',
        },

    })
);



function BackButtonMyItem() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid>
            <Button className={classes.root}
                variant='contained' size='large' type="submit"
                component={Link} to="/My Items">
                Back to My Items<ArrowBackIcon className={classes.iconstyle}></ArrowBackIcon>
            </Button>
            </Grid>

        </React.Fragment >
    );
};

export default BackButtonMyItem;