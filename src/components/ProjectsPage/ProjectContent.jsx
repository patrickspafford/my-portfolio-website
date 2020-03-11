import React from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CodeBlock } from 'react-code-blocks';

const StyledExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: '#142630',
        color: 'white'
    },
    content: {
        margin: 0
    }
    })(ExpansionPanelSummary);
  
const StyledExpansionPanel = withStyles({
    root: {
        backgroundColor: '#142630',
        color: 'white',
        marginTop: '1px',
        marginBottom: '1px'
    }
})(ExpansionPanel);

const StyledExpansionPanelDetails = withStyles({
    root: {
        display: 'block'
    }
})(ExpansionPanelDetails);

export default function ProjectContent({title, description, panelTitles, videos, poster, language, sampleCode}) {
    return (
        <>
        <h3>{title}</h3>
        <p>{description}</p>
        <StyledExpansionPanel>
            <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}>
                <h3>{panelTitles[0]}</h3>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
                <div type='row' style={{textAlign: 'left', display: 'flex'}}>
                    <div type='column'>
                        <CodeBlock  language={language} text={sampleCode[0]}/>
                    </div>
                    <div type='column'>
                        <CodeBlock language={language} text={sampleCode[1]} />
                    </div>
                </div>
            </StyledExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel>
          <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}>
            <h3>{panelTitles[1]}</h3>
          </StyledExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div type='container'>
              <video muted controls poster={poster} src={videos[0]} height='250px' width='370px' style={{margin: '20px'}}/>
              <video muted controls poster={poster} src={videos[1]} height='250px' width='370px' style={{margin: '20px'}}/>
            </div>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        </>
    );


}