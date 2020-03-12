import React from 'react';
import {GridList, GridListTile} from '@material-ui/core';

const images = []
export default function HobbiesGridList() {

    return(
        <GridList>
            {images.map((image) => (<GridListTile src={image} />))}
        </GridList>
    )
}