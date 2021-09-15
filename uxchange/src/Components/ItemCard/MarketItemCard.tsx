import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CssBaseline, Grid, Container } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia'; 
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardGrid: {
            padding: '20px 0'
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        cardMedia: {
            height: '0',
            paddingTop: '56.25%'
        },
        cardContent: {
            flexGrow: 1,
        },

    })
);

const cards = [1,2,3,4,5,6,7,8,9,10]


function MarketItemCard() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://waihekebikeshop.co.nz/wp-content/uploads/2020/05/cropped-gabe_7R32545_pdd002_2000.jpg"
                                        title="Second hand bike"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Second hand Bike
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            This is a media card
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}


                    </Grid>
                </Container>



        </React.Fragment >
    );
};

export default MarketItemCard;
