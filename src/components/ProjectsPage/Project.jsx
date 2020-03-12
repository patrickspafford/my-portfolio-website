import React from 'react';
import GifPlayer from 'react-gif-player';
import ProjectContent from './ProjectContent';
import { makeStyles, withStyles, Button, Typography, StepLabel, Step, Stepper } from '@material-ui/core';
import Welcome from '../../pictures/welcome.gif';
import CardholderVideo from '../../pictures/CardholdersVideoGood.mov';
import CardholderVideo2 from '../../pictures/CardholdersBad.mp4';
import CardholderProcessor from '../../pictures/CardholderProcessor.txt';
import BlueDiamondCardholder from '../../pictures/BlueDiamondCardholder.txt';
import JavaWordSearcher from '../../pictures/JavaWordSearcher.mov';
import WordSearchClass from '../../pictures/WordSearchClass.txt';
import Letter from '../../pictures/Letter.txt';
import PythonWordSearch from '../../pictures/PythonWordSearch.mov';
import Boggle from '../../pictures/Boggle.txt';
import position from '../../pictures/position.txt';
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
  buttonLabel: {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#142630',
    color: 'white'
  },
  stepper: {
    backgroundColor: 'transparent'
  },
  stepLabel: {
    color: 'black'
  }
}));


const StyledStepLabel = withStyles({
  root: {
    color: 'black'
  }
})(StepLabel);

function getSteps() {
  return ['Welcome', 'Cardholder (Java)', 'WordSearcher (Java)', 'WordSearcher (Python)', 'Duel (C++)',  'Parser (Ruby)', 'This Website (React.js)'];
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
          panelTitle='Sample Code: CardholderProcessor.java and BlueDiamondCardholder'
          videos={[CardholderVideo, CardholderVideo2]}
          sampleCode={[readTextFile(CardholderProcessor), readTextFile(BlueDiamondCardholder)]}
          language='java'
          />
          )
      case 2:
      return (
        <ProjectContent
          title='WordSearcher in Java (Spring 2019)'
          description="A Java program from my second computing class that given a dictionary and an n x n matrix of letters can find every word on the board (consistent with the rules of Boggle) of any specified length or all lengths. If a word is on the board, the program can tell the player the position of that word's letters. If that word is not on the board, that is handled properly."
          panelTitle='Sample Code: WordSearchClass.java and Letter.java'
          videos={[JavaWordSearcher]}
          sampleCode={[readTextFile(WordSearchClass), readTextFile(Letter)]}
          language='java'
          />
      )
    case 3:
      return (
        <ProjectContent
          title='WordSearcher in Python (Spring 2019)'
          description='The same WordSearcher, except written in the syntax and using the data structures of Python'
          panelTitle='Sample Code: Boggle.py and position.py'
          videos={[PythonWordSearch]}
          sampleCode={[readTextFile(Boggle), readTextFile(position)]}
          language='python'
          />)
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
  return (
    <div className={classes.root}>
      <Stepper classes={{root: classes.stepper}} activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StyledStepLabel>{label}</StyledStepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed.</Typography>
            <Button classes={{label: classes.buttonLabel }} onClick={() => setActiveStep(0)}>Reset</Button>
          </div>
        ) : (
          <div style={{textAlign: 'center'}}>
            {getStepContent(activeStep)}
            <div>
              <Button
                classes={{label: classes.buttonLabel}}
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prevActiveStep => prevActiveStep - 1)}
              >
                Back
              </Button>
              <Button classes={{label: classes.buttonLabel}} onClick={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}