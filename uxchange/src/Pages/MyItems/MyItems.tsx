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
      width:'100%',
      height: '635px',
      [theme.breakpoints.only('lg')]: {
        height: '635px',
      },
      [theme.breakpoints.only('md')]: {
        height: '635px',
      },
      [theme.breakpoints.only('sm')]: {
        height: '700px',
      },
      [theme.breakpoints.only('xs')]: {
        height: '760px',
      },
    },
    icon: {
      marginRight: '20px',
    },
    buttons: {
      marginTop: '2em',
      marginBottom: '120px',
      background: 'rgba(9,75,121,1)',
      width: '50%',
      margin: 'auto',
      borderRadius: '1em',
      padding: '0.95em',
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        margin: 'auto',
        borderRadius: '1em',
        padding: '0.95em',
        marginBottom: '10em',
        marginTop: '5em',
      },
      [theme.breakpoints.only('sm')]: {
        marginBottom: '8m',
      },
      
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
      background: '#000124',
      textTransform: 'capitalize',
      // border: '0.01em solid rgba(0,1,36,1)',
      '&:hover': {
        background: '#FFCC00',
        color: '#000124',
      },
    },
    title: {
      marginTop: '2em',
      color: '#fff0d6',
      [theme.breakpoints.only('xs')]: {
        marginTop: '1em',
        fontSize: '3em',
        marginBottom: '1em',
      },
      [theme.breakpoints.only('sm')]: {
        marginTop: '2em',
        fontSize: '3em',
      },
      [theme.breakpoints.only('md')]: {
        marginTop: '1.2em',
        fontSize: '4em',
      },
    },
    titleTwo: {
      marginTop:'1.3em',
      paddingBottom: '2.8em',
      color:'rgba(0,212,255,1)',
      fontFamily: 'caveat',
      fontSize: '2em',
      [theme.breakpoints.only('xs')]: {
        paddingBottom: '0',
        fontSize: '1.5em',
      },
    },
    // borderBottom: {
    //   margin: 'auto',
    //   width: '100%',
    //   borderBottom: '5px rgba(9,75,121,1) dashed',
    // },
    cardSection:{
      marginTop:'-6em',
      height:'1650px',
      background:'#000124',
      [theme.breakpoints.only('xl')]:{
        height:'1650px',
      },
      [theme.breakpoints.only('lg')]:{
        height:'1650px',
      },
      [theme.breakpoints.only('md')]:{
        height:'3650px',
      },
      [theme.breakpoints.only('sm')]:{
        height:'3650px',
      },
      [theme.breakpoints.only('xs')]:{
        height:'5300px',
        marginTop:'-3em',
      },
      // '& .MuiBox-root':{
      // },
    },
  })
);

const myItemCard = [
  {
    image: 'https://cdn.shopify.com/s/files/1/2647/0684/files/kaabo-mantis-dual-full__91784.1588047382.1280.1280_large.jpg?v=1596175027',
    title: 'E-Scooter',
    exchange: '$650',
    contacts: '02106263236',
    description: 'The condition of the E-scooter is fairly good. The wheels and batteries have just been replaced. ',
  },

  {
    image: 'https://img3.exportersindia.com/product_images/bc-full/2019/2/6148197/apple-iphone-xs-max-512gb-1549643543-4706321.jpeg',
    title: 'Iphone XS',
    exchange: '$800',
    contacts: '02798654456',
    description: 'Brand new Iphone for sale',
  },

  {
    image: 'https://cdn.mos.cms.futurecdn.net/6XpZp6H95BBHfAWQcopDCG-970-80.jpg.webp',
    title: 'PS4 and controller',
    exchange: 'Trade',
    contacts: '02212521145',
    description: 'Almost brand new. I have only used it three times. If anyone has an XBOX 360 I would prefer to trade for that. If not, we can negotiate the price. Feel free to let me know.',
  },

  {
    image: 'https://assets.kogan.com/files/product/2021/FZN-MG180/FZN-MG180_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
    title: 'Massage gun',
    exchange: '$75',
    contacts: '02216156657',
    description: 'I have used this a couple of times. I chose to sell the massage gun as I am recovered from injury and will not be using it anymore.',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: 'Electric bike',
    exchange: 'Trade',
    contacts: '02236958963',
    description: 'I would like to trade it in for a E-scooter. ',
  },
];


function MyItems() {
  const classes = useStyles();


  return (
    < React.Fragment >
      <CssBaseline />

      <div className={classes.container}>
        <Container maxWidth="xl">


          {/* <div className={classes.borderBottom}> */}

            <Typography
              className={classes.title}
              variant="h2" align="center" gutterBottom>
              Welcome to <span style={{ color: '#ffcc00', textTransform: 'capitalize', fontFamily: 'caveat brush', }}> your Item(s) </span> list
            </Typography>

            <Typography
              className={classes.titleTwo}
              variant="h5" align="center" color="textSecondary" paragraph>
              Create your Ipost, Update and Delete.
            </Typography>

          {/* </div> */}

          <div className={classes.buttons}>

            <Grid container spacing={2} justify="center">
              <Grid item>

                <Button color="primary"
                  className={classes.buttonOption}
                  style={{ fontWeight: 'bold', border: '1px rgba(0, 0, 0, 0.87) solid', }}
                  component={Link} to="/Market Place">
                  <StorefrontIcon style={{ marginRight: '0.2em' }}></StorefrontIcon>Market items
                </Button>
              </Grid>

              <Grid item>
                <Button color="primary"
                  className={classes.buttonOption}
                  style={{
                    background: '#FFCC00', color: 'rgba(0, 0, 0, 0.87)', fontWeight: 'bold', border: '1px rgba(0, 0, 0, 0.87) solid',
                  }}>
                  <ViewListIcon style={{ marginRight: '0.2em' }}></ViewListIcon>My item list
                </Button>
              </Grid>

              <Grid item>
                <Button color="primary"
                  className={classes.buttonOption}
                  style={{ fontWeight: 'bold', border: '1px rgba(0, 0, 0, 0.87) solid', }}
                  component={Link} to="/Create Ipost">
                  <AddCircleIcon style={{ marginRight: '0.2em', fontWeight: 'bold',  }}></AddCircleIcon> Create I-post
                </Button>
              </Grid>

            </Grid>

          </div>

        </Container>

        <Box px={3} mt={-4} className={classes.cardSection}>
          <Grid container spacing={5}>
            {myItemCard.map((myItemCard, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={6} lg={3} >
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


