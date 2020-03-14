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
                <div style={{textAlign: 'left'}}>
                    {sampleCode.map((file, i) => {
                        return (
                        <div type='column' key={i} style={{margin: '5px'}}>
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
              {videos.map((video, j) => {
              return (<video key={j} muted controls src={video} height='50%' width='50%'poster={blackPoster} 
                />)})}
            </div>
          </ExpansionPanelDetails>
              </StyledExpansionPanel> }
        </>
    );


}