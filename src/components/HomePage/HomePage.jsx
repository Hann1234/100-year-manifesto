import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

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
}));

function HomePage() {
  // HomePage DOM where the user begins their 100YM journey
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch ();
  const classes = useStyles();
  const history = useHistory();

  return (
      <div>
          {/* Prototype Grid layout */}
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Paper className={classes.paper}>
              this is where the manifesto goes I do not know if we thought about
              this but almost all of our pages are going to follw a vary
              spacific grid layout so it should be atop priority to get that
              layout figured out so we can all have it for our pages
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper2}>
              <h1>Welcome, {user.email}! Start your journey here!</h1>
            </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/intro')}>
                <h1>1 Intro: Your 100 Year Manifesto</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/missionStatement')}>
                <h1>2 Mission Statement</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/mantras')}>
                <h1>3 Words to Live By</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/coreValues')}>
                <h1>4 Core Values</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/forGood')}>
                <h1>5 For Good</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/lifeGoals')}>
                <h1>6 Life Goals</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/guidingPrinciples')}>
                <h1>7 Guiding Principles</h1>
              </Paper>
              <Paper className={classes.paper2} onClick={() => history.push('/nextSteps')}>
                <h1>8 Next Steps</h1>
              </Paper>
          </Grid>
        </Grid>
      <p>Your ID is: {user.id}</p>
      <button className="nextButton" onClick={() => history.push('/intro')}>START</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
