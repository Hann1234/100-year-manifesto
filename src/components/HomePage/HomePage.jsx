import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";

import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    height: "100vh",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper2: {
    height: "10vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
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

  useEffect(() => {
    dispatch({
      type: "FETCH_ADDITIONAL_QUESTIONS",
    });
  }, []);

  return (
      <Grid container spacing={3} xs={12}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            this is where the manifesto goes I do not know if we thought about
            this but almost all of our pages are going to follw a vary spacific
            grid layout so it should be atop priority to get that layout figured
            out so we can all have it for our pages
          </Paper>
        </Grid>
        <Grid item align="center" xs={8}>
          <div>
            <h1>Welcome, {user.name}! Start your journey here!</h1>
          </div >
          <Grid container item xs={12} onClick={() => history.push("/intro")}>
            <Grid item xs={3}></Grid>
            <Grid item justify="center" xs={1}>
              <Avatar justify="center" className={classes.circle}>1</Avatar>
            </Grid>
            <Grid item xs={8}>
              <h1>Intro: Your 100 Year Manifesto</h1>
            </Grid>
          </Grid>
          <div onClick={() => history.push("missionStatement")}>
            <Avatar className={classes.circle}>2</Avatar> 
            <h1>Mission Statement</h1>
          </div>
          <div onClick={() => history.push("/mantras")}>
            <Avatar className={classes.circle}>3</Avatar> 
            <h1>Words to Live By</h1>
          </div>
          <div onClick={() => history.push("/coreValues")}>
            <Avatar className={classes.circle}>4</Avatar> 
            <h1>Core Values</h1>
          </div>
          <div onClick={() => history.push("/forGood")}>
          <Avatar className={classes.circle}>5</Avatar> 
            <h1>For Good</h1>
          </div>
          <div onClick={() => history.push("/lifeGoals")}>
          <Avatar className={classes.circle}>6</Avatar> 
            <h1>Life Goals</h1>
          </div>
          <div onClick={() => history.push("/guidingPrinciples")}>
          <Avatar className={classes.circle}>7</Avatar> 
            <h1>Guiding Principles</h1>
          </div>
          <div onClick={() => history.push("/nextSteps")}>
          <Avatar className={classes.circle}>8</Avatar> 
            <h1>Next Steps</h1>
          </div>
          <button className={classes.button} onClick={() => history.push("/intro")}>START</button>
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
