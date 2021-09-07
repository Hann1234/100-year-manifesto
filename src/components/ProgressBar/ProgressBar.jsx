import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Imports for Material UI styling 
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

function getSteps(activeStep) {
  return [
    "Intro: Your 100 Year Manifesto",
    "Mission Statement",
    "Words to Live By",
    "Core Values",
    "For Good",
    "Life Goals",
    "Guiding Principles",
    "Next Step",
  ];
}

function ProgressBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeStep = useSelector((store) => store.nextButtonReducer.nextButton);
  const [oldActiveStep, setActiveStep] = React.useState();
  const completedReducer = useSelector(
    (store) => store.completeButtonReducer.completeButton
  );
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps(activeStep);
  const history = useHistory();

  useEffect(() => {
    setActiveStep(activeStep);
  }, [activeStep]);

  console.log(`What is activeStep store value?`, activeStep);
  console.log(
    `What is in completedReducer in ProgressBar.jsx`,
    completedReducer
  );

  function getStepContent(step) {
    switch (step) {
      case 0:
        return history.push("/homepage");
      case 1:
        return history.push("/missionStatement");
      case 2:
        return history.push("/wordsToLiveBy");
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
        return "";
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

  const handleStep = (step) => () => {
    setActiveStep(step);
    getStepContent(step);
    dispatch({ type: "SET_NEXT_BUTTON", payload: step });
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completedReducer[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>

          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
