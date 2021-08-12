import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
<Typography> Home page</Typography>
    </React.Fragment >
  );
};

export default HomePage;
