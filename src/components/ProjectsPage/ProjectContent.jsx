import React from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CodeBlock } from 'react-code-blocks';
import blackPoster from '../../assets/blackPoster.jpg';

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
        display: 'block',
        height: '700px',
        overflow: 'auto'
    }
})(ExpansionPanelDetails);

export default function ProjectContent({title, description, panelTitle, videos, language, sampleCode}) {
    return (
        <>
        <h3>{title}</h3>
        <p style={{paddingLeft: '15px', paddingRight: '15px'}}>{description}</p>
        <StyledExpansionPanel>
            <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}>
                <h3>{panelTitle}</h3>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
                <div type='row' style={{textAlign: 'left', display: 'flex'}}>
                    {sampleCode.map((file) => {
                        return (
                        <div type='column' style={{margin: '5px'}}>
                            <CodeBlock  language={language} text={file}/>
                        </div>
                    )})}  
                </div>
            </StyledExpansionPanelDetails>
        </StyledExpansionPanel>
        {videos.length > 0 && <StyledExpansionPanel>
          <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}>
            <h3>Demo Videos</h3>
          </StyledExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div type='container'>
              {videos.map((video) => {
              return (<video muted controls poster={blackPoster} src={video} height='250px' width='370px' 
                style={{margin: '20px'}}/>)})}
            </div>
          </ExpansionPanelDetails>
              </StyledExpansionPanel> }
        </>
    );


}