import React from 'react';
import Header from '../components/Header';
import Book from '../components/Book';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
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
        <div style={{overflow: 'scroll', paddingTop: '80px'}}>
            <Header AppBarStyle="static" />
            {expansionPanels.map((expansionPanel, i) => {
                return (
                <ExpansionPanel key={i}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {expansionPanel.title}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {expansionPanel.books.map(book =>
                        <Book key={book.title} title={book.title} image={book.img} desc={book.description} />)}   
                    </ExpansionPanelDetails>
                </ExpansionPanel>)
            })}  
        </div>
    )
}