import React from 'react';
import Header from '../components/Header';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SHHML from '../pictures/SheHasHerMothersLaugh.jpg';

export default function BookshelfPage() {

    const expansionPanels = [
        {
            title: "Notable Audiobooks",
            content: "Placeholder...",
            books: [
                {
                    title: "She Has Her Mother's Laugh",
                    description: "A book on genetics",
                    img: SHHML
                },
                
            ]
        },
        {
            title: "Notable Printed Books",
            content: "Other books...",
            books: []
        }
    ]
    return(
        <div>
            <Header AppBarStyle="static" />
            {expansionPanels.map(expansionPanel => {
                return (
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                        {expansionPanel.title}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {expansionPanel.books.map(book => {
                            return (
                            <Card>
                                <CardHeader title={book.title} />
                                <CardMedia image={book.img} />
                                <CardContent>
                                    {book.description}
                                </CardContent>
                            </Card>
                            )
                        })}
                        
                    </ExpansionPanelDetails>
                </ExpansionPanel>)
            })}  
        </div>
    )
}