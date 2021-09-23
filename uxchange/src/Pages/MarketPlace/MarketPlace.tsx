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
import { spacing } from '@material-ui/system';




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
      padding: '10px 0'
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
      color:'rgba(0,212,255,1)',
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
      fontFamily: 'caveat',
      marginBottom: '2em',
      color:'rgba(0,212,255,1)',
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

const marketItemCard = [

  {
    image: 'https://cdn.shopify.com/s/files/1/2647/0684/files/kaabo-mantis-dual-full__91784.1588047382.1280.1280_large.jpg?v=1596175027',
    title: 'E-Scooter',
    exchange: '$500',
    contacts: '02106263236',
    description: 'The best bike there is Lorem Ipsum is simply dummyI thnk that this box needs to be decoreated and made better with widt h and gheight and my spelling mistakes are huge. this is a test to see how much it can go down ',
  },

  {
    image: 'https://img3.exportersindia.com/product_images/bc-full/2019/2/6148197/apple-iphone-xs-max-512gb-1549643543-4706321.jpeg',
    title: 'Iphone XS',
    exchange: '$800',
    contacts: '02798654456',
    description: 'Brand new Iphone for sale',
  },

  {
    image: 'https://images.idgesg.net/images/article/2020/11/ipad-air-2020-keyboard-100864847-large.jpg',
    title: 'Ipad 4 + pen with keyboard',
    exchange: 'Trade',
    contacts: '02130626959',
    description: 'Not my type of workbook, I prefer using a latop. Any Apple laptop would do that is close to the condition my of ipad 4. The condition of my Ipad is fairly new, I have only used it for a month now. We can negotiate a trade with money.',
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
    image: 'https://cdn.mos.cms.futurecdn.net/XZysNGdax65hJvNVJARoYB.jpg',
    title: 'Electric drum set',
    exchange: '680',
    contacts: '02798789369',
    description: 'I am moving into a small apartment from a big house so the drumset has to go. Used it for a year and in fairly good condition. You can give it a try and check out the specs.',
  },

  {
    image: 'https://motorhub.co.ke/files/60f921058332dIMG_4506.JPG',
    title: 'Mercedes Benz c200 2014',
    exchange: '$22,000',
    contacts: '02785951753',
    description: 'Interior:Leather/ Year:2014/ Mileage:39,664km/ Engine:2000cc/ Transmission:automatic/ Drive-type:2WD '
  },

  {
    image: 'https://www.thebigidea.nz/sites/default/files/styles/social_media/public/event-images/LaurenceBerry2.jpg?itok=xxeNDqHu',
    title: 'Painting lessons',
    exchange: '$25/hr',
    contacts: '02234165749',
    description: 'We have daily art lessons every Monday-Friday (excluding public holidays). Our art lessons include; oil painting, acrylic painting, sculpting, basic foundation sketching. To find out more go to our website at: www.innovationNZ.co.nz',
  },

  {
    image: 'https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg',
    title: 'Electric bike',
    exchange: 'Trade',
    contacts: '02236958963',
    description: 'I would like to trade it in for a E-scooter. ',
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

        <Box px={3} mt={-4} className={classes.cardSection}>
          <Grid container spacing={5}>
            {marketItemCard.map((marketItemCard, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} md={6} lg={3} >
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

