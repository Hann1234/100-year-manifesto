import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import AdminEdits from "../AdminEdits/AdminEdits";

import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  circle: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    marginRight: 20,
    marginTop: 23,
  },
}));

function HomePage() {
  // HomePage DOM where the user begins their 100YM journey
  const additionalQuestions = useSelector(
    (store) => store.additionalQuestionsReducer.additionalQuestions
  );
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const page_id = 0;

  useEffect(() => {
    dispatch({
      type: "FETCH_ADDITIONAL_QUESTIONS",
    });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });
  }, []);

  return (
      <Grid container spacing={3} xs={12}>
        <Grid item xs={5}>
          <div className="manifestoPadding">
            <AutoScale>
                <Manifesto />
            </AutoScale>
          </div>
        </Grid>
        <Grid container item xs={7} className="scrollableDiv">
          <Grid item align="center" xs={12}>
            <h1>Welcome, {user.name}! Start your journey here!</h1>
          </Grid >
          <Grid container item xs={12} onClick={() => history.push("/intro")}>
              <Avatar className={classes.circle}>1</Avatar>
              <h1>Intro: Your 100 Year Manifesto</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("missionStatement")}>
            <Avatar className={classes.circle}>2</Avatar> 
            <h1>Mission Statement</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("/mantras")}>
            <Avatar className={classes.circle}>3</Avatar> 
            <h1>Words to Live By</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("/coreValues")}>
            <Avatar className={classes.circle}>4</Avatar> 
            <h1>Core Values</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("/forGood")}>
          <Avatar className={classes.circle}>5</Avatar> 
            <h1>For Good</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("/lifeGoals")}>
          <Avatar className={classes.circle}>6</Avatar> 
            <h1>Life Goals</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("/guidingPrinciples")}>
          <Avatar className={classes.circle}>7</Avatar> 
            <h1>Guiding Principles</h1>
          </Grid>
          <Grid container item xs={12} onClick={() => history.push("/nextSteps")}>
          <Avatar className={classes.circle}>8</Avatar> 
            <h1>Next Steps</h1>
          </Grid>
          <Grid container item xs={12} align="center" justify = "center">
          <button className={classes.button} onClick={() => history.push("/intro")}>START</button>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          {additionalQuestions.map((answer) => {
            if (answer.id > 0) {
              return (
                <Grid item xs={8} key={answer.id}>
                  <p>{answer.question}</p>
                  <p>{answer.manifesto_text}</p>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
