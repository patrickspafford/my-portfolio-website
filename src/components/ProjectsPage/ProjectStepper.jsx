import React from 'react';
import GifPlayer from 'react-gif-player';
import ProjectContent from './ProjectContent';
import { makeStyles, Button, Typography, StepLabel, Step, Stepper } from '@material-ui/core';
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
import TriviaGame from '../../pictures/TriviaGame.txt'
import position from '../../pictures/position.txt';
import Lexer from '../../pictures/Lexer.txt';
import Parser from '../../pictures/Parser.txt';
import HomeCard from '../../pictures/HomeCard.txt';
import TriviaMovie from '../../pictures/TriviaMovie.mov';
import DebugTrivia from '../../pictures/DebuggingTrivia.mov';
import Ruby1 from '../../pictures/Ruby1.mov';
import Ruby2 from '../../pictures/Ruby2.mov';
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

const projects = [
  {
    title: 'Cardholder Processor in Java (Fall 2018)',
    description: "A Java program from my first computing class that reads a text file of the monthly transactions made by a credit card company's cardholders and processes that information to produce a report. This report is divided into those with Sapphire, Diamond and Blue Diamond card and a section for invalid transactions.",
    panelTitle: 'Sample Code: CardholderProcessor.java and BlueDiamondCardholder',
    videos: [CardholderVideo, CardholderVideo2],
    sampleCode: [readTextFile(CardholderProcessor), readTextFile(BlueDiamondCardholder)],
    language: 'java'
  },
  {
    title: 'WordSearcher in Java (Spring 2019)',
    description: "A Java program from my second computing class that given a dictionary and an n x n matrix of letters can find every word on the board (consistent with the rules of Boggle) of any specified length or all lengths. If a word is on the board, the program can tell the player the position of that word's letters. If that word is not on the board, that is handled properly.",
    panelTitle: 'Sample Code: WordSearchClass.java and Letter.java',
    videos: [JavaWordSearcher],
    sampleCode: [readTextFile(WordSearchClass), readTextFile(Letter)],
    language: 'java'
  },
  {
    title: 'WordSearcher in Python (Spring 2019)',
    description: 'The same WordSearcher, except written in the syntax and using the data structures of Python',
    panelTitle: 'Sample Code: Boggle.py and position.py',
    videos: [PythonWordSearch],
    sampleCode: [readTextFile(Boggle), readTextFile(position)],
    language: 'python'
  },
  {
    title: 'Trivia Game in C++ (Fall 2019)',
    description: 'A short trivia game that makes use of pointers and a linked list data structure.',
    panelTitle: 'Sample Code: TriviaGame.cpp',
    videos: [TriviaMovie, DebugTrivia],
    sampleCode: [readTextFile(TriviaGame)],
    language: 'cpp'
  },
  {
    title: 'Parser for Tiny Grammar in Ruby (Fall 2019)',
    description: "After the tokens of the source file are 'lexed,' this program constructs the parse tree to check whether the source file has a syntax error according to the grammar rules.",
    panelTitle: 'Sample Code: Lexer.rb and Parser.rb',
    videos: [Ruby1, Ruby2],
    sampleCode: [readTextFile(Lexer), readTextFile(Parser)],
    language: 'ruby'
  },
  {
    title: 'Portfolio Website in React (Spring 2020)',
    description: "The sample code is a high-level view of the Homepage's cards.\nThank you for taking a tour of my coding projects. Was an honor.",
    panelTitle: 'SampleCode: HomeCard.jsx',
    videos: [],
    sampleCode: [readTextFile(HomeCard)],
    language: 'jsx'
  }
]
function getSteps() {
  return ['Welcome', 'Cardholder (Java)', 'WordSearcher (Java)', 'WordSearcher (Python)', 'Trivia (C++)',  'Parser (Ruby)', 'This Website (React.js)'];
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
export default function ProjectStepper() {
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  let currentProject = projects[activeStep - 1];
  return (
    <div className={classes.root}>
      <Stepper classes={{root: classes.stepper}} activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel classes={{root: classes.stepLabel}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{textAlign: 'center'}}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>This is the end of the tour, but there is more in development...</Typography>
            <Button classes={{label: classes.buttonLabel }} onClick={() => setActiveStep(0)}>Reset</Button>
          </div>
        ) : (
          <div style={{textAlign: 'center'}}>
            { activeStep === 0 ?
                            <>
                              <h3>Welcome to a tour of some of my notable coding projects.</h3>
                              <GifPlayer gif={Welcome} still={Welcome} style={{height: '300px', width: '300px'}} />
                            </> :
                            <ProjectContent
                                    title={currentProject.title}
                                    description={currentProject.description}
                                    panelTitle={currentProject.panelTitle}
                                    videos={currentProject.videos}
                                    sampleCode={currentProject.sampleCode}
                                    language={currentProject.language} /> }
            <div>
              <Button
                classes={{label: classes.buttonLabel}}
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prevActiveStep => prevActiveStep - 1)}>
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