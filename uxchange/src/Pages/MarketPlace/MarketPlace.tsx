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
      // width:'60%',
      // margin:'auto',
      background: '#000124',
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
        height: '620px',
      },
    },
    icon: {
      marginRight: '20px',
    },
    buttons: {
      marginTop: '6em',
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
        marginBottom: '5em',
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
    cardContent: {
      flexGrow: 1,
    },
    buttonOption: {
      background: '#000124',
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
      [theme.breakpoints.only('xs')]: {
        marginTop: '0.8em',
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
      marginTop:'1em',
      fontSize: '2em',
      color: '#ffcc00',
      fontFamily: 'caveat',
      paddingBottom: '0',
      marginBottom: '0',
      [theme.breakpoints.only('xs')]: {
        paddingBottom: '0',
        marginBottom: '0',
        fontSize: '1.5em',
      },
      [theme.breakpoints.only('sm')]: {
        marginTop: '2em',
      },
      [theme.breakpoints.only('md')]: {
        marginTop: '1.5em',
      },
    },
    titleThree: {
      fontSize: '2em',
      color: '#ffcc00',
      fontFamily: 'caveat',
      marginBottom: '2em',
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

          {/* <div className={classes.borderBottom}> */}

          <Typography
            className={classes.title}
            variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to the <span style={{ color: '#ffcc00', textTransform: 'capitalize', fontFamily: 'caveat brush' }}> market place ! </span>
          </Typography>

          <Typography
            className={classes.titleTwo}
            variant="h4" align="center" paragraph>
            - Costs nothing, 100% FREE! to use.
          </Typography>
          <Typography
            className={classes.titleThree}
            variant="h4" align="center" paragraph>
            - Sell, trade and exchange.
          </Typography>


          {/* </div> */}

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
                  <AddCircleIcon style={{ marginRight: '0.2em' }}></AddCircleIcon> Create I-post
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

