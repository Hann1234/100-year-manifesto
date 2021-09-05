import { makeStyles } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Intro: Your 100 Year Manifesto",
    "Mission Statement",
    "Mantras",
    "Core Values",
    "For Good",
    "Life Goals",
    "Next Step",
  ];
}

function NextButton() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(-1);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const history = useHistory();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return history.push("/homepage");
      case 1:
        return history.push("/mantras");
      case 2:
        return history.push("/mantras");
      case 3:
        return history.push("/coreValues");
      case 4:
        return history.push("/forGood");
      case 5:
        return history.push("/lifeGoals");
      case 6:
        return history.push("/guidingPrinciples");
      case 7:
        return history.push("/nextSteps");
      default:
        return "Unknown step";
    }
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    getStepContent(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <div>
      <div>
        {/* <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button> */}
        <NextButton/>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          Next
        </Button> */}
        {/* {activeStep !== steps.length &&
          (completed[activeStep] ? (
            <Typography variant="caption" className={classes.completed}>
              Step {activeStep + 1} already completed
            </Typography>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleComplete}
            >
              {completedSteps() === totalSteps() - 1
                ? "Finish"
                : "Complete Step"}
            </Button>
          ))} */}
      </div>
    </div>
  );
}

export default NavigationButton;
