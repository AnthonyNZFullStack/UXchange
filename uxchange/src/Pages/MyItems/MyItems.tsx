import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import MyItemCard from "../../Components/ItemCard/MyItemCard";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(12, 0, 6),
      background: '#E0F4FF'
    },
    icon: {
      marginRight: '20px',
    },
    buttons: {
      marginTop: '40px'
    },
    cardGrid: {
      padding: '20px 0'
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    cardContent: {
      flexGrow: 1,
    },

  })
);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function MyItems() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.container}>
          <Container maxWidth="xl">
            <Typography
              variant="h2" align="center" color="textPrimary" gutterBottom>
              My Item List
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph
            style={{paddingBottom: '2em'}}>
              Create your post, update & delete
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary"
                  component={Link} to="/Market Place">
                    Market items
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my item list
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                   <AddCircleIcon style={{marginRight:'0.2em'}}></AddCircleIcon> Create I-post
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <MyItemCard />
        </div>
      </main>




    </React.Fragment >
  );
};

export default MyItems;


