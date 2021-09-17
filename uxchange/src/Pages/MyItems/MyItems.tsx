import React, { useState } from "react";
import { Typography, Button, CssBaseline, Grid, Container } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import MyItemCard from "../../Components/ItemCard/MyItemCard";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ViewListIcon from '@material-ui/icons/ViewList';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(12, 0),
      background: '#000124',
      height: '600px',
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
    buttonOption: {
      borderRadius: '3em',
      padding: '0.5em 3em',
      color: '#fff0d6',
      // border: '0.01em solid rgba(0,1,36,1)',
      '&:hover': {
        background: '#FFCC00',
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    title: {
      marginTop: '2em',
      color: '#fff0d6',
    },
    titleTwo: {
      marginBottom: '3em',
      color: '#fff0d6',
      fontFamily: 'caveat brush',
    },

  })
);

const myItemCard = [
  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: 'Second hand bike',
    exchange: 'Trade',
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


function MyItems() {
  const classes = useStyles();


  return (
    < React.Fragment >
      <CssBaseline />

      <div className={classes.container}>
        <Container maxWidth="xl">

          <Typography
            className={classes.title}
            variant="h2" align="center" color="textPrimary" gutterBottom>
            My Item(s) List
          </Typography>

          <Typography
            className={classes.titleTwo}
            variant="h5" align="center" color="textSecondary" paragraph
            style={{ paddingBottom: '2em' }}>
            Create your Ipost, update and delete
          </Typography>

          <div className={classes.buttons}>

            <Grid container spacing={2} justify="center">
              <Grid item>

                <Button color="primary"
                  className={classes.buttonOption}
                  style={{ fontWeight: 'bold', }}
                  component={Link} to="/Market Place">
                  <StorefrontIcon style={{ marginRight: '0.2em' }}></StorefrontIcon>Market items
                </Button>
              </Grid>

              <Grid item>
                <Button color="primary"
                  className={classes.buttonOption}
                  style={{
                    background: '#FFCC00', color: 'rgba(0, 0, 0, 0.87)', fontWeight: 'bold'
                  }}>
                  <ViewListIcon style={{ marginRight: '0.2em' }}></ViewListIcon>My item list
                </Button>
              </Grid>

              <Grid item>
                <Button color="primary"
                  className={classes.buttonOption}
                  style={{ fontWeight: 'bold', }}
                  component={Link} to="/Create Ipost">
                  <AddCircleIcon style={{ marginRight: '0.2em', fontWeight: 'bold', }}></AddCircleIcon> Create I-post
                </Button>
              </Grid>

            </Grid>

          </div>

        </Container>

        <Box p={5} m={0}>
          <Grid container spacing={10}>
            {myItemCard.map((myItemCard, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <MyItemCard {...myItemCard} />
                </Grid>
              );
            })}
          </Grid>
        </Box>

      </div>

    </React.Fragment >
  );
};

export default MyItems;


