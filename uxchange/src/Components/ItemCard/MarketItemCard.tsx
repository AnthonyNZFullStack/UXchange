import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CssBaseline, Grid, Container, Accordion, AccordionSummary, AccordionDetails, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactsIcon from '@material-ui/icons/Contacts';
import SyncIcon from '@material-ui/icons/Sync';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardGrid: {
            padding: '0 0',
            paddingTop: '2em',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            // background: 'rgba(9,75,121,1)',
            background: 'transparent',
        },
        cardMedia: {
            paddingTop: '70%',
            width: '98%',
            margin: 'auto',
            // borderRadius: '0.3em 0.3em 0em 0em',
        },
        exchangeContact: {
            marginTop: '0.5em',
            background: 'rgb(224, 244, 255)',
            borderRadius: '2em 2em 0em 0em',
            padding: '0.5em',
            fontFamily: 'caveat',
            width: '98%',
            height:'50px',
            margin: 'auto',
            display:'flex',
            justifyContent:'space-around',
            color:'#404040',
            // borderBottom:'1em #000124 solid',
        },
    })
);


interface Props {
    image: string;
    title: string;
    exchange: string;
    contacts: string;
    description: string;
}


function MarketItemCard({ image, title, exchange, contacts, description }: Props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Container className={classes.cardGrid}>
                <Grid>

                    <Card className={classes.card}>

                            <Grid container>
                                {/* <SyncIcon />
                                <Typography
                                    style={{ fontSize: '0.8em', textAlign: 'justify', padding: '0.5em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', borderRadius: '3em', fontWeight: 'bold', }}
                                    variant="body2" component="p" color="textSecondary">
                                    {exchange}
                                </Typography> */}

                                <ListItem className={classes.exchangeContact}>

                                    <div style={{ display: 'flex', }}>
                                        <SyncIcon /><Typography style={{ fontFamily: 'caveat', fontSize: '18px', fontWeight: 'bold' }}>{exchange}</Typography>
                                    </div>

                                    <div style={{ display: 'flex' }}>
                                        <ContactsIcon /><Typography style={{ fontFamily: 'caveat', fontSize: '18px', fontWeight: 'bold' }}>{contacts}</Typography>
                                    </div>

                                </ListItem>


                                {/* <ContactsIcon />
                                <Typography
                                    style={{ textAlign: 'justify', padding: '0.5em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', borderRadius: '3em', fontWeight: 'bold', }}
                                    variant="body2" component="p" >
                                    {contacts}
                                </Typography> */}

                            </Grid>

                            <CardMedia
                                className={classes.cardMedia}
                                image={image}
                            />


                            <Accordion style={{ fontWeight: 'bold', background: '#E0F4FF', width: '98%', margin: 'auto', borderRadius: '0em 0em 2em 2em',}}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">

                                    <Typography
                                        style={{ margin:'auto', padding: '0.5em', fontWeight: 'bold', color:'#404040', }}
                                        gutterBottom variant="body1" >
                                        {title}
                                    </Typography>

                                </AccordionSummary>

                                <AccordionDetails>

                                    <Typography
                                        style={{ textAlign: 'justify', padding: '0.5em' }}
                                        variant="body2" component="p" color="textSecondary">
                                        {description}
                                    </Typography>

                                </AccordionDetails>

                            </Accordion>
                    </Card>
                </Grid>


            </Container>



        </React.Fragment >
    );
};

export default MarketItemCard;
