import React from 'react';
import Header from '../components/Header';
import Book from '../components/Book';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, createMuiTheme, ThemeProvider} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SHHML from '../pictures/SheHasHerMothersLaugh.jpg';

const theme = createMuiTheme({
    overrides: {
      MuiCollapse: {
        container: {
          overflow: 'scroll',
        },
        entered: {
            overflow: 'auto'
        }
      },
    },
  });
export default function BookshelfPage() {
    const expansionPanels = [
        {
            title: "Notable Audiobooks",
            books: [
                {
                    title: "She Has Her Mother's Laugh",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "Algorithms to Live By",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "The Happiness Hypothesis",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "Infinite Powers",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "She Has Her Mother's Laugh",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "She Has Her Mother's Laugh",
                    description: "A book on genetics",
                    img: SHHML
                },
                {
                    title: "She Has Her Mother's Laugh",
                    description: "A book on genetics",
                    img: SHHML
                }
                
                
            ]
        },
        {
            title: "Notable Printed Books",
            books: []
        }
    ]
    return(
        <div style={{overflow: 'scroll', paddingTop: '80px'}}>
            <Header AppBarStyle="static" />
            {expansionPanels.map((expansionPanel, i) => {
                return (
            <ThemeProvider theme={theme}>
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
                </ExpansionPanel>
                </ThemeProvider>
                )
            })}  
        </div>
    )
}