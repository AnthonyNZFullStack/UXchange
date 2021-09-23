import React, { useState } from "react";
import { Typography, Button, Card, CssBaseline, Grid, Container, ListItem } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import ContactsIcon from '@material-ui/icons/Contacts';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';



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
            margin: 'none',
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
            height: '50px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            color: '#404040',
            // borderBottom:'1em #000124 solid',
        },
        button: {
            fontSize: '0.8em',
            color: '#e0f4ff',
            background: '#000124',
            border: 'thin #404040 solid',
            borderRadius: '3em',
            width: '50%',
            '&:hover': {
                background: '#000124',
            },
        },
        buttonLabel: {
            textTransform: 'capitalize',
            fontFamily: 'caveat',
            fontSize: '1.6em',
            color: '#e0f4ff',
            paddingTop: '0.1em',
        },
        editDelete: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '98%',
            background: 'rgb(224, 244, 255)',
            margin: 'auto',
            height: '50px',
            borderRadius: '0em 0em 2em 2em',
            padding: '0.5em 1em',
            paddingBottom: '1em',
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


function MyItemCard({ image, title, exchange, contacts, description }: Props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Container className={classes.cardGrid}>
                <Grid>

                    <Card className={classes.card}>


                        <Grid container>

                            <ListItem className={classes.exchangeContact}>

                                <div style={{ display: 'flex' }}>
                                    <SwapHorizIcon /><Typography style={{ fontFamily: 'caveat', fontSize: '18px', fontWeight: 'bold' }}>{exchange}</Typography>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <ContactsIcon /><Typography style={{ fontFamily: 'caveat', fontSize: '18px', fontWeight: 'bold' }}>{contacts}</Typography>
                                </div>

                            </ListItem>

                        </Grid>

                        <CardMedia className={classes.cardMedia} image={image} />


                        <Accordion style={{ fontWeight: 'bold', background: '#E0F4FF', width: '98%', margin: 'auto', borderRadius: '0em 0em 0em 0em' }}>

                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">

                                <Typography style={{ margin: 'auto', padding: '0.5em', fontWeight: 'bold', color: '#404040', }} gutterBottom variant="body1" >
                                    {title}
                                </Typography>

                            </AccordionSummary>

                            <AccordionDetails>

                                <Typography style={{ textAlign: 'justify', padding: '0.5em' }} variant="body2" component="p" color="textSecondary">
                                    {description}
                                </Typography>

                            </AccordionDetails>

                        </Accordion>


                    </Card>

                    <div className={classes.editDelete}>

                        <Button className={classes.button} style={{ marginRight: '1.2em' }} type="submit" component={Link} to="/Edit Ipost">

                            <CreateIcon /> <Typography className={classes.buttonLabel}>Edit</Typography>

                        </Button>

                        <Button className={classes.button}>

                            <DeleteIcon /><Typography className={classes.buttonLabel} >Delete</Typography>

                        </Button>

                    </div>

                </Grid>

            </Container>



        </React.Fragment >
    );
};

export default MyItemCard;
