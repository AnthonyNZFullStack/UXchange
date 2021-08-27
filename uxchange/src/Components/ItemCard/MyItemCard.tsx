import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CssBaseline, Grid, Container } from "@material-ui/core";
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
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardGrid: {
            padding: '0 0',
        },
        card: {
            display: 'flex',
            flexDirection: 'column'
        },
        cardMedia: {
            height: '0',
            paddingTop: '56.25%'
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

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid>

                    <Card className={classes.card}>

                        <CardMedia
                            className={classes.cardMedia}
                            image={image}
                        />



                        <CardContent>

                            <Grid container>

                                <Typography
                                    style={{ textAlign: 'justify', padding: '0.5em 1em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', borderRadius: '1em', fontWeight: 'bold', border: '0.01em #3f51b5 solid' }}
                                    variant="body2" component="p" color="textSecondary">
                                    {exchange}
                                </Typography>

                                <Typography
                                    style={{ textAlign: 'justify', padding: '0.5em 1em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', marginLeft: '1em', borderRadius: '1em', fontWeight: 'bold', border: '0.01em #3f51b5 solid' }}
                                    variant="body2" component="p" >
                                    {contacts}
                                </Typography>

                            </Grid>


                            <Accordion style={{ marginTop: '1em', fontWeight: 'bold' }}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">

                                    <Typography
                                        style={{ textAlign: 'left', padding: '0.5em', fontWeight: 'bold', }}
                                        gutterBottom variant="h6" >
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

                            <Grid container style={{ paddingTop: '1em', display: 'flex', justifyContent: 'flex-end' }}>

                                <Button
                                    style={{ textAlign: 'left', padding: '0.3em 1.5em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', borderRadius: '1em', textTransform: 'capitalize', marginRight: '1em', border: '0.01em #3f51b5 solid' }}
                                    component={Link} to="/Edit Ipost"
                                    color="primary">
                                    <Typography
                                        style={{ fontWeight: 'bold' }}>
                                        Edit
                                    </Typography>
                                </Button>

                                <Button
                                    style={{ textAlign: 'left', padding: '0.3em 1.5em', background: 'rgb(255, 204, 0)', color: 'rgba(0,1,36,1)', borderRadius: '1em', textTransform: 'capitalize', border: '0.01em #3f51b5 solid' }}
                                    color="primary">
                                    <Typography
                                        style={{ fontWeight: 'bold' }}>
                                        Delete
                                    </Typography>
                                </Button>

                            </Grid>

                        </CardContent>

                    </Card>
                </Grid>


            </Container>



        </React.Fragment >
    );
};

export default MyItemCard;
