import { Button, makeStyles } from "@material-ui/core";
import React from "react";
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

function BackButton() {
  const classes = useStyles();
  const activeStep = useSelector((store) => store.nextButtonReducer.nextButton);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const dispatch = useDispatch();

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleBack = () => {
    const newActiveStep = isLastStep()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep - 1;
    dispatch({ type: "SET_NEXT_BUTTON", payload: newActiveStep });
  };

  return (
    <div>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.button}
        style={{
          backgroundColor: "#132411",
          color: "#1c4bd9",
        }}
      >
        Back
      </Button>
    </div>
  );
}

export default BackButton;
