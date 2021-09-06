import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

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
  const activeStep = useSelector((store) => store.nextButtonReducer.nextButton);
  // const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const dispatch = useDispatch();

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    dispatch({ type: "SET_NEXT_BUTTON", payload: newActiveStep });
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        // onClick={() => handleNext()}
        className={classes.button}
      >
        Next
      </Button>
    </div>
  );
}

export default NextButton;
