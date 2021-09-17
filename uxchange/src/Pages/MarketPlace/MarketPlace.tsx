import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Box } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import MarketItemCard from "../../Components/ItemCard/MarketItemCard";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IpostForm from "../../Components/IPostForm/IpostForm";
import StorefrontIcon from '@material-ui/icons/Storefront';
import ViewListIcon from '@material-ui/icons/ViewList';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(12, 0, 6),
      background: '#000124',
      height: '600px',
      [theme.breakpoints.only('xs')]:{
        height: '600px',
      },
      [theme.breakpoints.only('lg')]:{
        height: '550px',
      },
      [theme.breakpoints.only('md')]:{
        height: '580px',
      },
      [theme.breakpoints.only('sm')]:{
        height: '650px',
      },
    },
    icon: {
      marginRight: '20px',
    },
    buttons: {
      marginTop: '40px',
      marginBottom: '120px',
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
      border: '1px rgba(0, 0, 0, 0.87) solid',
      borderRadius: '3em',
      padding: '0.5em 3em',
      color: '#fff0d6',
      textTransform: 'capitalize',
      '&:hover': {
        background: '#FFCC00',
        color: '#000124',
      },
    },
    title: {
      marginTop: '2em',
      color: '#fff0d6',
      [theme.breakpoints.only('xs')]:{
        marginTop: '1em',
        fontSize: '3em',
        marginBottom:'1em',
      },
    },
    titleTwo: {
      marginBottom: '3em',
      color: '#fff0d6',
      fontFamily: 'caveat brush',
      paddingBottom: '2em',
      [theme.breakpoints.only('xs')]:{
        paddingBottom: '0',
      },
    }

  })
);

const marketItemCard = [
  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: 'Second hand bike',
    exchange: 'For sale',
    contacts: '02234554389',
    description: 'The best bike there is',
  },

  {
    image: 'https://cdn.shopify.com/s/files/1/2647/0684/files/kaabo-mantis-dual-full__91784.1588047382.1280.1280_large.jpg?v=1596175027',
    title: 'E-Scooter',
    exchange: '$500',
    contacts: '02234554389',
    description: 'The best bike there is Lorem Ipsum is simply dummyI thnk that this box needs to be decoreated and made better with widt h and gheight and my spelling mistakes are huge. this is a test to see how much it can go down ',
  },

  {
    image: 'https://img3.exportersindia.com/product_images/bc-full/2019/2/6148197/apple-iphone-xs-max-512gb-1549643543-4706321.jpeg',
    title: 'Iphone XS',
    exchange: '$800',
    contacts: '02234554389',
    description: 'Brand new Iphone for sale',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: 'Second hand bike',
    exchange: 'Trade',
    contacts: '022345543',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '5) Second hand bike',
    exchange: 'Trade',
    contacts: '022345543',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '6) Second hand bike',
    exchange: 'Trade',
    contacts: '022345543',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '7) Second hand bike',
    exchange: 'Trade',
    contacts: '022345543',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '8) Second hand bike',
    exchange: 'Trade',
    contacts: '022345543',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '9) Second hand bike',
    exchange: 'Trade',
    contacts: '022345543',
    description: 'Testing Testing testing',
  },
];



const MarketPlace: React.FC = () => {
  const classes = useStyles();
  // const [cards, setCards] = useState("");

  // const addNewCards: AddNewCards = newCards => {
  //   setCards([...cards, {text: newCards}])
  // }

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.container}>

        <Container maxWidth="xl">

          <Typography
            className={classes.title}
            variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to the market place
          </Typography>

          <Typography
            className={classes.titleTwo}
            variant="h5" align="center" color="textSecondary" paragraph>
            Where your search begins. Sell, trade and exchange.
          </Typography>

          <div className={classes.buttons}>

            <Grid container spacing={2} justify="center">
              <Grid item>

                <Button
                  className={classes.buttonOption}
                  style={{
                    background: '#FFCC00', color: '#000124',
                    fontWeight: 'bold'
                  }} color="primary">
                  <StorefrontIcon style={{ marginRight: '0.2em' }}></StorefrontIcon>Market items
                </Button>

              </Grid>
              <Grid item>

                <Button
                  className={classes.buttonOption}
                  style={{ fontWeight: 'bold', border: '1px rgba(0, 0, 0, 0.87) solid', }} color="primary"
                  component={Link} to="/My Items">
                  <ViewListIcon style={{ marginRight: '0.2em' }}></ViewListIcon>My item list
                </Button>

              </Grid>

              <Grid item>
                <Button color="primary"
                  className={classes.buttonOption}
                  style={{ fontWeight: 'bold', border: '1px rgba(0, 0, 0, 0.87) solid', }}
                  component={Link} to="/Create Ipost">
                  <AddCircleIcon style={{ marginRight: '0.5em' }}></AddCircleIcon> Create I-post
                </Button>
              </Grid>

            </Grid>
          </div>

          {/* <IpostForm addNewCards={addNewCards} /> */}

        </Container>

        <Box p={5} m={0}>
          <Grid container spacing={10}>
            {marketItemCard.map((marketItemCard, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <MarketItemCard {...marketItemCard} />
                </Grid>
              );
            })}
          </Grid>
        </Box>


      </div>




    </React.Fragment >
  );
};

export default MarketPlace;

