import React from 'react';
import Header from '../components/Header';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function BookshelfPage() {

    const expansionPanels = [
        {
            title: "Notable Audiobooks",
            content: "Placeholder..."
        },
        {
            title: "Notable Printed Books",
            content: "Other books..."
        }
    ]
    return(
        <div>
            <Header AppBarStyle="static" />
            {expansionPanels.map(expansionPanel => {
                return (
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{expansionPanel.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        {expansionPanel.content}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>)
            })}  
        </div>
    )
}