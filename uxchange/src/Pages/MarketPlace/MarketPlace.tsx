import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import MarketItemCard from "../../Components/ItemCard/MarketItemCard";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IpostForm from "../../Components/IPostForm/IpostForm";



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
      marginTop: '40px',
      marginBottom: '40px'
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
    buttonOption: {
      borderRadius: '3em', 
      padding: '0.5em 3em',
      '&:hover': {
        background: '#FFCC00',
        color: 'rgba(9,75,121,1)',
      },
    },
  })
);



const MarketPlace: React.FC = () => {
  const classes = useStyles();
  const [cards, setCards] = useState("");

  // const addNewCards: AddNewCards = newCards => {
  //   setCards([...cards, {text: newCards}])
  // }

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.container}>

        <Container maxWidth="xl">

          <Typography
            variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to the market place
          </Typography>

          <Typography variant="h5" align="center" color="textSecondary" paragraph
            style={{ paddingBottom: '2em' }}>
            Exchange your Experience
          </Typography>

          <div className={classes.buttons}>

            <Grid container spacing={2} justify="center">
              <Grid item>

                <Button
                className={classes.buttonOption}
                style={{ background: '#FFCC00',
                color: 'black', fontWeight: 'bold' }}
                  variant="outlined" color="primary">
                  Market items
                </Button>

              </Grid>
              <Grid item>

                <Button
                className={classes.buttonOption}
                  style={{ fontWeight: 'bold', color: 'black' }}
                  variant="outlined" color="primary"
                  component={Link} to="/My Items">
                  See my item list
                </Button>

              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary"
                className={classes.buttonOption}
                  style={{ fontWeight: 'bold', color: 'black' }}
                  component={Link} to="/Create Ipost">
                  <AddCircleIcon style={{ marginRight: '0.2em' }}></AddCircleIcon> Create I-post
                </Button>
              </Grid>

            </Grid>
          </div>
          
          {/* <IpostForm addNewCards={addNewCards} /> */}

        </Container>

        <MarketItemCard />

      </div>




    </React.Fragment >
  );
};

export default MarketPlace;

