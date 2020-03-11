import React from 'react';
import GifPlayer from 'react-gif-player';
import ProjectContent from './ProjectContent';
import { makeStyles, withStyles, Button, Typography, StepLabel, Step, Stepper } from '@material-ui/core';
import Welcome from '../../pictures/welcome.gif';
import CardholderVideo from '../../pictures/CardholdersVideoGood.mov';
import CardholderVideo2 from '../../pictures/CardholdersBad.mp4';
import blackPoster from '../../pictures/blackPoster.jpg';
import CardholderProcessor from '../../pictures/CardholderProcessor.txt';
import BlueDiamondCardholder from '../../pictures/BlueDiamondCardholder.txt';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: 'linear-gradient(180deg, #eee, #424486)'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const StyledButton = withStyles({
  label: {
      border: '1px solid white',
      borderRadius: '5px',
      padding: '10px',
      backgroundColor: '#142630',
      color: 'white'
  }
  })(Button);

const StyledStepper = withStyles({
  root: {
    backgroundColor: 'transparent'
  }
})(Stepper);

const StyledStepLabel = withStyles({
  root: {
    color: 'black'
  }
})(StepLabel);

function getSteps() {
  return ['Welcome', 'Cardholder (Java)', 'Boggle (Java)', 'Boggle (Python)', 'Duel (C++)',  'Parser (Ruby)', 'This Website (React.js)'];
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText
}
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
      <>
      <h3>Welcome to a tour of some of my notable coding projects.</h3>
      <GifPlayer gif={Welcome} still={Welcome} style={{height: '300px', width: '300px'}} />
      </>
      );
    case 1: 
      return (
        <ProjectContent
          title='Cardholder Processor in Java (Fall 2018)'
          description="A Java program from my first computing class that reads a text file of the monthly transactions made by a credit card company's cardholders and processes that information to produce a report. This report is divided into those with Sapphire, Diamond and Blue Diamond card and a section for invalid transactions."
          panelTitles={['Sample Code: CardholderProcessor.java and BlueDiamondCardholder', 'Demo Videos']}
          videos={[CardholderVideo, CardholderVideo2]}
          poster={blackPoster}
          sampleCode={[readTextFile(CardholderProcessor), readTextFile(BlueDiamondCardholder)]}
          language='java'
          />
          )
        case 2:
      return 'A Java program that takes in an n x n matrix of letters and uses a depth-first search approach to find every word on the board (consistent with the rules of Boggle).';
    case 3:
      return 'The same Boggle program, except written in Python!'
    case 4:
      return 'A little C++ game that simulates a duel between players of different accuracies.'
    case 5:
      return 'A Ruby parser for a hypothetical programming language with a given tiny grammar.'
    case 6:
      return 'The very website you are on right now! Written in React.js'
      default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <StyledStepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StyledStepLabel>{label}</StyledStepLabel>
          </Step>
        ))}
      </StyledStepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed.</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div style={{textAlign: 'center'}}>
            {getStepContent(activeStep)}
            <div>
              <StyledButton
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </StyledButton>
              <StyledButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </StyledButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}