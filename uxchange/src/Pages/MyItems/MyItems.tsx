import React, { useState } from "react";
import { Typography, Button, CssBaseline, Grid, Container } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import MyItemCard from "../../Components/ItemCard/MyItemCard";
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';




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
    buttonOption: {
      borderRadius: '3em', 
      padding: '0.5em 3em'
    },
  })
);

const myItemCard = [
  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '1) Second hand bike',
    description: 'The best bike there is',
  },

  {
    image: 'https://cdn.shopify.com/s/files/1/2647/0684/files/kaabo-mantis-dual-full__91784.1588047382.1280.1280_large.jpg?v=1596175027',
    title: '2) E-Scooter',
    description: 'The best bike there is Lorem Ipsum is simply dummyI thnk that this box needs to be decoreated and made better with widt h and gheight and my spelling mistakes are huge. this is a test to see how much it can go down ',
  },

  {
    image: 'https://img3.exportersindia.com/product_images/bc-full/2019/2/6148197/apple-iphone-xs-max-512gb-1549643543-4706321.jpeg',
    title: '3) Iphone XS',
    description: 'Brand new Iphone for sale',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '4) Second hand bike',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '5) Second hand bike',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '6) Second hand bike',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '7) Second hand bike',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '8) Second hand bike',
    description: 'Testing Testing testing',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: '9) Second hand bike',
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
            variant="h2" align="center" color="textPrimary" gutterBottom>
            My Item List
          </Typography>

          <Typography variant="h5" align="center" color="textSecondary" paragraph
            style={{ paddingBottom: '2em' }}>
            Create your post, update and delete
          </Typography>

          <div className={classes.buttons}>

            <Grid container spacing={2} justify="center">
              <Grid item>

                <Button variant="outlined" color="primary"
                className={classes.buttonOption}
                  style={{  }}
                  component={Link} to="/Market Place">
                  Market items
                </Button>
              </Grid>

              <Grid item>
                <Button variant="contained" color="primary"
                className={classes.buttonOption}
                  style={{ background: 'linear-gradient(90deg, rgba(0,1,36,1) 0%, rgba(9,75,121,1) 100%, rgba(0,212,255,1) 100%)',
                  color: '#FFCC00', }}>
                  See my item list
                </Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary"
                className={classes.buttonOption}
                  style={{  }}
                  component={Link} to="/Create Ipost">
                  <AddCircleIcon style={{ marginRight: '0.2em' }}></AddCircleIcon> Create I-post
                </Button>
              </Grid>

            </Grid>

          </div>

        </Container>

        <Box p={5} m={5}>
          <Grid container spacing={10}>
            {myItemCard.map((myItemCard, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={4} xl={3}>
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


