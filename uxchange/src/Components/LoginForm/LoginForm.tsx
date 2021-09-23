import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { TextField, Grid, Typography } from '@material-ui/core'
import LoginButton from "../Buttons/LoginButton";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: 'white',

                [theme.breakpoints.down('xl')]: {
                    width: '50%'
                },
                [theme.breakpoints.down('md')]: {
                    width: '70%'
                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                },
                [theme.breakpoints.only('xs')]: {
                    width: '100%',
                },
            }
        },
        rootRadial: {
            color: 'white',
            '& .MuiFormGroup-root': {
                backgroundColor: '#E0F4FF',
                margin: 'auto',
                paddingTop: '0.5em',
            },
            '& .MuiFormControl-root': {
                backgroundColor: '#E0F4FF',
            },
        },

        buttonRemember: {
            color: '#00d4ff',
            '&:hover': {
                color: '#FFCC00',
            },
        },


        buttonRoot: {
            color: 'rgba(0,212,255,1)',
            '& .MuiButton-label': {
                textTransform: 'Capitalize',
                alignItems: 'center'
            },
            '&:hover': {
                color: '#FFCC00',
            },
        },

    })
);



function LoginForm() {
    const classes = useStyles();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setUsernameError(false)
        setPasswordError(false)

        if (username == '') {
            setUsernameError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
        if (username && password) {
            console.log({ "username": username, "password": password })
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <form
                noValidate autoComplete="off" onSubmit={handleSubmit}
                className={classes.root}>

                <Grid>
                    <AccountCircleIcon style={{ marginTop: '1em', color: '#ffcc00', fontSize: '5em' }}></AccountCircleIcon>
                </Grid>

                <Grid>
                    <Typography variant='h2' gutterBottom
                        style={{ fontFamily: 'caveat', color: '#ffcc00' }}>
                        Login
                    </Typography>
                </Grid>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={12}>
                        <TextField
                            onChange={(e) => setUsername(e.target.value)}
                            id="Username"
                            name="Username"
                            type="text"
                            label="Username"
                            variant="filled"
                            error={usernameError}
                        />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            id="Password"
                            name="Password"
                            type="text"
                            label="Password"
                            variant="filled"
                            error={passwordError}
                        />
                    </Grid>

                </Grid>

                <Grid className={classes.rootRadial}>

                    <FormControlLabel className={classes.buttonRemember} control={<Checkbox name="remeber me" />} label="Remember me" />

                    <Button className={classes.buttonRoot} style={{ backgroundColor: 'transparent', padding: '0 1em', display: 'inline-block' }}>
                        Forgot password?
                    </Button>

                </Grid>


                <LoginButton />

                <Grid >

                    <Typography variant='body2' style={{ color: 'white', }}>
                        Not a member?
                        <Button className={classes.buttonRoot}
                            style={{ backgroundColor: 'transparent', padding: '0 1em', display: 'inline-block' }}
                            component={Link} to="/Sign Up">
                            Click here to create account
                        </Button>

                    </Typography>

                </Grid>

            </form>

        </React.Fragment >
    );
};

export default LoginForm;
