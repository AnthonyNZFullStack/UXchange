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
            paddingTop:'2em'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(9,75,121,1)'
        },
        cardMedia: {
            marginTop: '1.5em',
            paddingTop: '70%',
            width: '100%',
            margin: 'auto',
            borderRadius: '0.3em 0.3em 0em 0em',
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

                        <CardContent>

                            <Grid container>
                                {/* <SyncIcon />
                                <Typography
                                    style={{ fontSize: '0.8em', textAlign: 'justify', padding: '0.5em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', borderRadius: '3em', fontWeight: 'bold', }}
                                    variant="body2" component="p" color="textSecondary">
                                    {exchange}
                                </Typography> */}

                                <ListItem style={{background:'#E0F4FF', borderRadius:'0.5em', padding:'0.5em', fontFamily:'caveat',}}>
                                    <SyncIcon /><ListItemText style={{marginLeft:'0.5em'}} primary={exchange}></ListItemText>
                                    <ContactsIcon /><ListItemText style={{marginLeft:'0.5em'}} primary={contacts} />
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


                            <Accordion style={{ fontWeight: 'bold', background:'#E0F4FF' }}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">

                                    <Typography
                                        style={{ textAlign: 'left', padding: '0.5em', fontWeight: 'bold', color:'#000124', }}
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

                        </CardContent>

                    </Card>
                </Grid>


            </Container>



        </React.Fragment >
    );
};

export default MarketItemCard;
