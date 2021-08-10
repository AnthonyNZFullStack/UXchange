import React from "react";
import { Typography, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

    </React.Fragment >
  );
};

export default HomePage;
