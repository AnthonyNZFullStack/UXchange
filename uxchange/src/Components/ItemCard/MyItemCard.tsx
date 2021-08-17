import React, { useState } from "react";
import { Typography, Button, Card, CardActions, CardContent, CssBaseline, Grid, Container } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';



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
            heigh: '0',
            paddingTop: '56.25%'
        },
        cardContent: {
            flexGrow: 1,
        },

    })
);


interface Props {
    image: string;
    title: string;
    description: string;
}


function MyItemCard({ image, title, description }: Props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Container className={classes.cardGrid} maxWidth="sm">
                    <Grid>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={image}
                                title={title}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    {title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ textAlign: 'right' }}>
                                <Button size="small" color="primary">
                                    <Typography> <CreateIcon />edit </Typography>
                                </Button>
                                <Button size="small" color="primary">
                                    <DeleteIcon />
                                    delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


            </Container>



        </React.Fragment >
    );
};

export default MyItemCard;
