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


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                backgroundColor: 'white',

                [theme.breakpoints.down('xl')]: {
                    width: '30%'
                },
                [theme.breakpoints.only('md')]: {
                    width: '40%'
                },
                [theme.breakpoints.down('sm')]: {
                    width: '60%',
                },
                [theme.breakpoints.only('xs')]: {
                    width: '100%',
                },
            }
        },
        rootRadial: {
            '& .MuiFormGroup-root': {
                backgroundColor: '#E0F4FF',
                margin: 'auto',
                paddingTop: '0.5em',
            },
            '& .MuiFormControl-root': {
                backgroundColor: '#E0F4FF',
            }
        },

        buttonRoot: {
            '& .MuiButton-label': {
                color: 'rgba(0,212,255,1)',
                textTransform: 'Capitalize',
                alignItems: 'center'
            }
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

        if(username == '') {
            setUsernameError(true)
        }
        if(password == '') {
            setPasswordError(true)
        }
        if (username && password) {
            console.log({"username": username, "password": password})
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <form
                noValidate autoComplete="off" onSubmit={handleSubmit}
                className={classes.root}>

                <Typography variant='h4' gutterBottom
                    style={{ marginTop: '1em' }}
                > Login</Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            onChange={(e) => setUsername(e.target.value)}
                            variant="outlined"
                            label="Username"
                            id="Username"
                            name="Username"
                            type="text"
                            error={usernameError}
                        />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            label="Password"
                            error={passwordError}
                        />
                    </Grid>

                </Grid>

                <Grid className={classes.rootRadial}>
                    <FormControlLabel control={<Checkbox name="remeber me" />} label="Remember me" />
                    <Button className={classes.buttonRoot}
                        style={{ backgroundColor: 'transparent', padding: '0 1em', display: 'inline-block' }}>
                        Forgot password?
                    </Button>
                </Grid>


                <LoginButton />

                <Grid >
                    <Typography variant='body2'> Not a member?
                        <Button className={classes.buttonRoot}
                            style={{ backgroundColor: 'transparent', padding: '0 1em', display: 'inline-block' }}
                            component={Link} to="/Sign Up">
                            Create account
                        </Button>
                    </Typography>
                </Grid>

            </form>

        </React.Fragment >
    );
};

export default LoginForm;
