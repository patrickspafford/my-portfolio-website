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
        width: '350px'
    }
})(Card);

export default function Book({title, image, desc}) {
    return (
        <div style={{margin: '25px'}}>
        <StyledCard>
            <StyledCardHeader title={title} />
            <StyledCardContent>
                <StyledCardMedia image={image} height='150px' component='img'/>
            </StyledCardContent>
        </StyledCard>
        <ExpansionPanel>
            <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}>
                <p>About</p>
            </StyledExpansionPanelSummary>
            <ExpansionPanelDetails>
                <p>{desc}</p>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    )
}