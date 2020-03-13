import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        width: '35%',
        margin: '10px',
        border: '2px solid white',
        backgroundColor: '#142630',
        minWidth: '300px',
        maxWidth: '400px'
    },
    cardMediaRoot: {
        paddingTop: '10px'
    },
    cardMediaImg: {
        objectFit: 'scale-down'
    },
    button: {
        border: '1px solid white',
        borderRadius: '5px',
        padding: '10px'
    }
  }));

export default function HomeCard({title, href, image, buttons, buttonRefs, download}) {
    const classes = useStyles();
    return(
        <Card classes={{root: classes.card }} key={title}>
            <CardActionArea href={href}>
                <CardMedia classes={{root: classes.cardMediaRoot, img: classes.cardMediaImg }} src={image} title={title} height="300" component="img" />
                <CardContent>
                    <h2 className='h2'><u>{title}</u></h2>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {buttons.map((buttonContent, i) =>
                (<Button classes={{label: classes.button }} key={i} href={buttonRefs[i]} download={download[i]} size="small">
                    <h4 className='h4'>{buttonContent}</h4>
                </Button>))}
            </CardActions>
        </Card>
    );
}