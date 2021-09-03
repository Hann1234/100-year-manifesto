import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

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
  box: {
    display: "flex",
    padding: 8
  },
  bottomBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
}));

function CoreValues() {

  const coreValues = useSelector((store) => store.coreValuesReducer.coreValues);
  const [CoreValuesToEdit, setCoreValuesToEdit] = useState(0);
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
    { key: 51, label: 'Creation' },
    { key: 52, label: 'Creativity' },
    { key: 53, label: 'Credibility' },
    { key: 54, label: 'Curiosity' },
    { key: 55, label: 'Decisive' },
    { key: 56, label: 'Decisiveness' },
    { key: 57, label: 'Dedication' },
    { key: 58, label: 'Dependability' },
    { key: 59, label: 'Determination' },
    { key: 60, label: 'Development' },
    { key: 61, label: 'Devotion' },
    { key: 62, label: 'Dignity' },
    { key: 63, label: 'Discipline' },
    { key: 64, label: 'Discovery' },
    { key: 65, label: 'Drive' },
    { key: 66, label: 'Effectiveness' },
    { key: 67, label: 'Efficiency' },
    { key: 68, label: 'Empathy' },
    { key: 69, label: 'Empower' },
    { key: 70, label: 'Endurance' },
    { key: 71, label: 'Energy' },
    { key: 72, label: 'Enjoyment' },
    { key: 73, label: 'Enthusiasm' },
    { key: 74, label: 'Equity' },
    { key: 75, label: 'Ethical' },
    { key: 76, label: 'Excellence' },
    { key: 77, label: 'Experience' },
    { key: 78, label: 'Exploration' },
    { key: 79, label: 'Expressive' },
    { key: 80, label: 'Fairness' },
    { key: 81, label: 'Family' },
    { key: 82, label: 'Famous' },
    { key: 83, label: 'Fearless' },
    { key: 84, label: 'Feelings' },
    { key: 85, label: 'Ferocious' },
    { key: 86, label: 'Fidelity' },
    { key: 87, label: 'Focus' },
    { key: 88, label: 'Foresight' },
    { key: 89, label: 'Fortitude' },
    { key: 90, label: 'Freedom' },
    { key: 91, label: 'Friendship' },
    { key: 92, label: 'Fun' },
    { key: 93, label: 'Generosity' },
    { key: 94, label: 'Genius' },
    { key: 95, label: 'Giving' },
    { key: 96, label: 'Goodness' },
    { key: 97, label: 'Grace' },
    { key: 98, label: 'Gratitude' },
    { key: 99, label: 'Greatness' },
    { key: 100, label: 'Growth' },
    { key: 101, label: 'Happiness' },
    { key: 102, label: 'Hard work' },
    { key: 103, label: 'Harmony' },
    { key: 104, label: 'Health' },
    { key: 105, label: 'Honesty' },
    { key: 106, label: 'Honor' },
    { key: 107, label: 'Hope' },
    { key: 108, label: 'Humility' },
    { key: 109, label: 'Imagination' },
    { key: 110, label: 'Improvement' },
    { key: 111, label: 'Independence' },
    { key: 112, label: 'Individuality' },
    { key: 113, label: 'Innovation' },
    { key: 114, label: 'Inquisitive' },
    { key: 115, label: 'Insightful' },
    { key: 116, label: 'Inspiring' },
    { key: 117, label: 'Integrity' },
    { key: 118, label: 'Intelligence' },
    { key: 119, label: 'Intensity' },
    { key: 120, label: 'Intuitive' },
    { key: 121, label: 'Irreverent' },
    { key: 122, label: 'Joy' },
    { key: 123, label: 'Justice' },
    { key: 124, label: 'Kindness' },
    { key: 125, label: 'Knowledge' },
    { key: 126, label: 'Lawful' },
    { key: 127, label: 'Leadership' },
    { key: 128, label: 'Learning' },
    { key: 129, label: 'Liberty' },
    { key: 130, label: 'Logic' },
    { key: 131, label: 'Love' },
    { key: 132, label: 'Loyalty' },
    { key: 133, label: 'Mastery' },
    { key: 134, label: 'Maturity' },
    { key: 135, label: 'Meaning' },
    { key: 136, label: 'Moderation' },
    { key: 137, label: 'Motivation' },
    { key: 138, label: 'Openness' },
    { key: 139, label: 'Optimism' },
    { key: 140, label: 'Order' },
    { key: 141, label: 'Organization' },
    { key: 142, label: 'Originality' },
    { key: 143, label: 'Passion' },
    { key: 144, label: 'Patience' },
    { key: 145, label: 'Peace' },
    { key: 146, label: 'Performance' },
    { key: 147, label: 'Persistence' },
    { key: 148, label: 'Playfulness' },
    { key: 149, label: 'Poise' },
    { key: 150, label: 'Potential' },
    { key: 151, label: 'Power' },
    { key: 152, label: 'Present' },
    { key: 153, label: 'Productivity' },
    { key: 154, label: 'Professionalism' },
    { key: 155, label: 'Prosperity' },
    { key: 156, label: 'Purpose' },
    { key: 157, label: 'Quality' },
    { key: 158, label: 'Realistic' },
    { key: 159, label: 'Reason' },
    { key: 160, label: 'Recognition' },
    { key: 161, label: 'Recreation' },
    { key: 162, label: 'Reflective' },
    { key: 163, label: 'Respect' },
    { key: 164, label: 'Responsibility' },
    { key: 165, label: 'Restraint' },
    { key: 166, label: 'Results-oriented' },
    { key: 167, label: 'Rigor' },
    { key: 168, label: 'Risk' },
    { key: 169, label: 'Satisfaction' },
    { key: 170, label: 'Security' },
    { key: 171, label: 'Self-reliance' },
    { key: 172, label: 'Selfless' },
    { key: 173, label: 'Sensitivity' },
    { key: 174, label: 'Serenity' },
    { key: 175, label: 'Service' },
    { key: 176, label: 'Sharing' },
    { key: 177, label: 'Significance' },
    { key: 178, label: 'Silence' },
    { key: 179, label: 'Simplicity' },
    { key: 180, label: 'Sincerity' },
    { key: 181, label: 'Skill' },
    { key: 182, label: 'Skillfulness' },
    { key: 183, label: 'Smart' },
    { key: 184, label: 'Solitude' },
    { key: 185, label: 'Spirit' },
    { key: 186, label: 'Spirituality' },
    { key: 187, label: 'Spontaneous' },
    { key: 188, label: 'Stability' },
    { key: 189, label: 'Status' },
    { key: 190, label: 'Stewardship' },
    { key: 191, label: 'Strength' },
    { key: 192, label: 'Structure' },
    { key: 193, label: 'Success' },
    { key: 194, label: 'Support' },
    { key: 195, label: 'Surprise' },
    { key: 196, label: 'Sustainability' },
    { key: 197, label: 'Talent' },
    { key: 198, label: 'Teamwork' },
    { key: 199, label: 'Temperance' },
    { key: 200, label: 'Thankful' },
    { key: 201, label: 'Thorough' },
    { key: 202, label: 'Thoughtful' },
    { key: 203, label: 'Timeliness' },
    { key: 204, label: 'Tolerance' },
    { key: 205, label: 'Toughness' },
    { key: 206, label: 'Traditional' },
    { key: 207, label: 'Tranquility' },
    { key: 208, label: 'Transparency' },
    { key: 209, label: 'Trust' },
    { key: 210, label: 'Trustworthy' },
    { key: 211, label: 'Truth' },
    { key: 212, label: 'Understanding' },
    { key: 213, label: 'Uniqueness' },
    { key: 214, label: 'Unity' },
    { key: 215, label: 'Valor' },
    { key: 216, label: 'Victory' },
    { key: 217, label: 'Vigor' },
    { key: 218, label: 'Vision' },
    { key: 219, label: 'Vitality' },
    { key: 220, label: 'Wealth' },
    { key: 221, label: 'Welcoming' },
    { key: 222, label: 'Winning' },
    { key: 223, label: 'Wisdom' },
    { key: 224, label: 'Wonder' },
  ]);

  useEffect(() => {
    //need to retrieve video and page details
}, [])

//Need handleSubmit
const handleClick = (value) => {
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
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://kajabi-storefronts-production.s3.amazonaws.com/sites/143056/video/kMypT3S5iPDUWJ6hioaw_100_-_DIY_-_Core_Values_v3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20210827%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210827T143843Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d809bb4dae9bc46f54e78f51db053875963aeb5c9fad1a1a573dc6a0f327054a"
                  ></iframe>
                </div>
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
                                onClick={() => handleClick(data.label)}
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

export default CoreValues;