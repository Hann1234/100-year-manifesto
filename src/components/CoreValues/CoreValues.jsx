import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from '@material-ui/core/Chip';

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
    height: "28vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper3: {
    height: "28vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper4: {
    height: "60vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function Intro() {
  const store = useSelector((store) => store);
  const [name, setName] = useState('');
  const dispatch = useDispatch ();
  const classes = useStyles();

  useEffect(() => {
    //need to retrieve video, image, and page details
}, [])

//Need handleSubmit
const editName = (event) => {
    event.preventDefault();
    //Need to verify what the dispatch will be for this
    dispatch({ type: "SET_NAME", payload: name });
    };

  return (
    <section>
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
            <Paper className={classes.paper}>
            <center>
              <h1>Core Values</h1>
                <h2>You can’t argue with your core values. They just are.  What are yours?</h2>
            </center>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper className={classes.paper2}> 
                    <h2>The video will go here</h2>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper3}>
                    <center>
                    <h4>Most companies have identified a set of core values. Oftentimes they post them on their walls as a reminder for their employees, their customers, & everyone they encounter.</h4>
                    <br></br>
                    <h4>If it makes sense for a business, it definitely makes sense for an individual to have a personal set of core values. Uncompromising, non-negotiables.</h4>
                    <br></br>
                    <h4>Our values reveal themselves to us.</h4>
                    </center>
                    {/* <form onSubmit={editName}> add input to create new chips
                        <input
                            className=""
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Please enter preferred name"
                        />
                        <button className="nameButton" type="submit">SAVE</button>
                    </form> */}
                  </Paper>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper4}>
                <center>
                  <h4>What five core values have revealed themselves to you in the course of your life?
                    Pick 4-5-6 core values. Ones that have revealed themselves to you in your life.
                    The challenge here is this: there may be many core values that resonate with you.
                    For your 100 Year Manifesto, which are the ones that are in your heart of hearts. What are those core values?</h4>
                  {/* What is the "For Good" section renamed as? <button className="nextButton" onClick={() => history.push('/forgood')}>NEXT</button> */}
                </center>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Intro;