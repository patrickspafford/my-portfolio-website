import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, withStyles, ExpansionPanel, ExpansionPanelSummary,
ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledCardMedia = withStyles({
    root : {
        padding: '10px',
        width: '150px',
        margin: 'auto',
    },
    img: {
        objectFit: 'scale-down',
    }
    })(CardMedia);
const StyledCardContent = withStyles({
    root: {
        backgroundColor: '#eee'
    }
})(CardContent);

const StyledCardHeader = withStyles({
    content: {
        textAlign: 'center'
    },
    root: {
        backgroundColor: '#142630',
        color: 'white'
    },
    title: {
        fontSize: '1rem'
    }
})(CardHeader);

const StyledExpansionPanelSummary = withStyles({
root: {
    backgroundColor: '#142630',
    color: 'white'
}
})(ExpansionPanelSummary);

const StyledCard = withStyles({
    root: {
        width: '350px',
        height: '275px'
    }
})(Card);

const StyledExpansionPanel = withStyles({
    root: {
        width: '350px'
    }
})(ExpansionPanel);

export default function Book({title, image, desc}) {
    return (
        <div style={{margin: '15px'}}>
        <StyledCard>
            <StyledCardHeader title={title} style={{textOverflow: 'ellipsis'}} />
            <StyledCardContent>
                <StyledCardMedia image={image} height='175px' component='img'/>
            </StyledCardContent>
        </StyledCard>
        <StyledExpansionPanel>
            <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}>
                <p>About</p>
            </StyledExpansionPanelSummary>
            <ExpansionPanelDetails style={{height: '300px'}}>
                <p>{desc}</p>
            </ExpansionPanelDetails>
        </StyledExpansionPanel>
        </div>
    )
}