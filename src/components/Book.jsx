import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, withStyles } from '@material-ui/core';

const StyledCardMedia = withStyles({
    root : {
        padding: '10px',
        width: '150px',
        margin: 'auto'
    },
    img: {
        objectFit: 'scale-down',
    }
    })(CardMedia);

const StyledCardHeader = withStyles({
    content: {
        textAlign: 'center'
    }
})(CardHeader);

export default function Book({title, image, desc}) {
    return (
        <Card>
            <StyledCardHeader title={title} />
            <CardContent>
                <StyledCardMedia image={image} height='100px' width='100px' component='img'/>
            </CardContent>
            <CardContent>
                <p>{desc}</p>
            </CardContent>
        </Card>
    )
}