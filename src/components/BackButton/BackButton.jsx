import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    background: "linear-gradient(45deg, #21CBF3 30%, #2196F3  90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 36,
    padding: "0 30px",
    marginRight: 2
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
      variant="contained"
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.button}
      >
        Back
      </Button>
    </div>
  );
}

export default BackButton;
