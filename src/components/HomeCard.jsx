import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, withStyles} from '@material-ui/core';

const StyledCard = withStyles({
    root: {
        width: '35%',
        marginTop: '10px',
        marginRight: '10px',
        marginLeft: '10px',
        border: '2px solid white',
        backgroundColor: '#6d8fa1',
        minWidth: '300px',
        maxWidth: '700px',
    }
   })(Card);

const StyledCardMedia = withStyles({
    root : {
        paddingTop: '10px',  
    },
    img: {
        objectFit: 'scale-down',
    }
    })(CardMedia);

const StyledButton = withStyles({
    label: {
        border: '1px solid white',
        borderRadius: '5px',
        padding: '10px'
    }
    })(Button);

export default function HomeCard({title, href, image, buttons, buttonRefs, download}) {
    return(
        <StyledCard key={title}>
            <CardActionArea href={href}>
                <StyledCardMedia src={image} title={title} height="350" component="img" />
                <CardContent>
                    <h2 className='h2'><u>{title}</u></h2>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {buttons.map((buttonContent, i) =>
                (<StyledButton key={i} href={buttonRefs[i]} download={download[i]} size="small">
                    <h4 className='h4'>{buttonContent}</h4>
                </StyledButton>))}
            </CardActions>
        </StyledCard>
    );
}