import React from 'react';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

export default function Book({title, image, desc,...props}) {
    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia image={image} />
            <CardContent>
                {desc}
            </CardContent>
        </Card>
    )
}