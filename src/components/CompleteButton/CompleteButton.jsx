import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    "Next Step",
  ];
}

function CompleteButton() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeStep = useSelector((store) => store.nextButtonReducer.nextButton);
  const completeStep = useSelector(
    (store) => store.completeButtonReducer.nextButton
  );
  const [oldActiveStep, setActiveStep] = React.useState();
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps(activeStep);

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    dispatch({
      type: "SET_COMPLETE_BUTTON",
      payload: {
        property: activeStep,
        value: true,
      },
    });
    handleNext();
    console.log(`What happens when clicking on complete`, newCompleted);
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const totalSteps = () => {
    return steps.length;
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
    dispatch({ type: "SET_NEXT_BUTTON", payload: newActiveStep });
  };

  return (
    <div>
      {activeStep !== steps.length &&
        (completed[activeStep] ? (
          <Typography variant="caption" className={classes.completed}>
            Step {activeStep + 1} already completed
          </Typography>
        ) : (
          <Button variant="contained" color="primary" onClick={handleComplete}>
            {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}
          </Button>
        ))}
    </div>
  );
}

export default CompleteButton;
