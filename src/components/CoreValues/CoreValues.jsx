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

  //Chip info
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Acceptance' },
    { key: 1, label: 'Accomplishment' },
    { key: 2, label: 'Accountability' },
    { key: 3, label: 'Accuracy' },
    { key: 4, label: 'Achievement' },
    { key: 5, label: 'Adaptability' },
    { key: 6, label: 'Alertness' },
    { key: 7, label: 'Altruism' },
    { key: 8, label: 'Ambition' },
    { key: 9, label: 'Amusement' },
    { key: 10, label: 'Assertiveness' },
    { key: 11, label: 'Attentive' },
    { key: 12, label: 'Awareness' },
    { key: 13, label: 'Balance' },
    { key: 14, label: 'Beauty' },
    { key: 15, label: 'Boldness' },
    { key: 16, label: 'Bravery' },
    { key: 17, label: 'Brilliance' },
    { key: 18, label: 'Calm' },
    { key: 19, label: 'Candor' },
    { key: 20, label: 'Capable' },
    { key: 21, label: 'Careful' },
    { key: 22, label: 'Certainty' },
    { key: 23, label: 'Challenge' },
    { key: 24, label: 'Charity' },
    { key: 25, label: 'Cleanliness' },
    { key: 26, label: 'Clear' },
    { key: 27, label: 'Clever' },
    { key: 28, label: 'Comfort' },
    { key: 29, label: 'Commitment' },
    { key: 30, label: 'Common Sense' },
    { key: 31, label: 'Communication' },
    { key: 32, label: 'Community' },
    { key: 33, label: 'Compassion' },
    { key: 34, label: 'Competence' },
    { key: 35, label: 'Concentration' },
    { key: 36, label: 'Confidence' },
    { key: 37, label: 'Connection' },
    { key: 38, label: 'Consciousness' },
    { key: 39, label: 'Consistency' },
    { key: 40, label: 'Contentment' },
    { key: 41, label: 'Contribution' },
    { key: 42, label: 'Control' },
    { key: 43, label: 'Conviction' },
    { key: 44, label: 'Cooperation' },
    { key: 45, label: 'Courage' },
    { key: 46, label: 'Courtesy' },
    { key: 47, label: 'Creation' },
    { key: 48, label: 'Creativity' },
    { key: 49, label: 'Credibility' },
    { key: 50, label: 'Curiosity' },
    { key: 51, label: 'jQuery' },
    { key: 52, label: 'Polymer' },
    { key: 53, label: 'React' },
    { key: 54, label: 'Vue.js' },
    { key: 55, label: 'Angular' },
    { key: 56, label: 'jQuery' },
    { key: 57, label: 'Polymer' },
    { key: 58, label: 'React' },
    { key: 59, label: 'Vue.js' },
    { key: 60, label: 'Angular' },
    { key: 61, label: 'jQuery' },
    { key: 62, label: 'Polymer' },
    { key: 63, label: 'React' },
    { key: 64, label: 'Vue.js' },
    { key: 65, label: 'Angular' },
    { key: 66, label: 'jQuery' },
    { key: 67, label: 'Polymer' },
    { key: 68, label: 'React' },
    { key: 69, label: 'Vue.js' },
    { key: 70, label: 'Angular' },
    { key: 71, label: 'jQuery' },
    { key: 72, label: 'Polymer' },
    { key: 73, label: 'React' },
    { key: 74, label: 'Vue.js' },
    { key: 75, label: 'Angular' },
    { key: 76, label: 'jQuery' },
    { key: 77, label: 'Polymer' },
    { key: 78, label: 'React' },
    { key: 79, label: 'Vue.js' },
    { key: 80, label: 'Angular' },
    { key: 81, label: 'jQuery' },
    { key: 82, label: 'Polymer' },
    { key: 83, label: 'React' },
    { key: 84, label: 'Vue.js' },
    { key: 85, label: 'Angular' },
    { key: 86, label: 'jQuery' },
    { key: 87, label: 'Polymer' },
    { key: 88, label: 'React' },
    { key: 89, label: 'Vue.js' },
  ]);

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
                <Paper component="ul" className={classes.root}>
                    {chipData.map((data) => {
                        return (
                            <li key={data.key}>
                                <Chip
                                label={data.label}
                                className={classes.chip}
                                clickable
                                onClick={handleClick}
                                color="primary"
                                />
                            </li>
                        );
                    })}
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