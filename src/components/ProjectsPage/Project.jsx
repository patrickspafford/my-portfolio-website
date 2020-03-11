import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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

function getSteps() {
  return ['Welcome', 'Cardholder (Java)', 'Boggle (Java)', 'Boggle (Python)', 'Duel (C++)', 'This Website (React.js)'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Welcome to a tour of some of my notable coding projects.';
    case 1:
      return 'A program that reads a text file and outputs information about Sapphire, Diamond, and BlueDiamond Cardholders.';
    case 2:
      return 'A Java program that takes in an n x n matrix of letters and uses a depth-first search approach to find every word on the board (consistent with the rules of Boggle).';
    case 3:
      return 'The same Boggle program, except written in Python!'
    case 4:
      return 'A little C++ game that simulates a duel between players of different accuracies.'
    case 5:
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
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed.</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div style={{textAlign: 'center'}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <StyledButton
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </StyledButton>
              <StyledButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next Project'}
              </StyledButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}