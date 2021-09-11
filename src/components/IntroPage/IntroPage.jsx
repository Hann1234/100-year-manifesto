import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

//Card imports
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from "@material-ui/core";

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
  
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
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
}));

function Intro() {
  const store = useSelector((store) => store);
  const [name, setName] = useState('');
  const dispatch = useDispatch ();
  const classes = useStyles();
  const history = useHistory();

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
    <Grid container spacing={3} xs={12}>
      <Grid xs={4}>
        <AutoScale>
            <Manifesto />
          </AutoScale>
      </Grid>
      <Grid container item align="center" justify = "center" xs={8} className="scrollableDiv">
        <Grid item xs={12}>
          <h1>Intro: Your 100 Year Manifesto</h1>
            <h3>Welcome to The 100 Year Manifesto.  We are so glad you’re here.</h3>
            <h3>Your 100 Year Manifesto is your framework for living.</h3>
            <h3>For living with intentionality.  For living the life worthy of the calling you received.</h3>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <div className="videoWrapper">
              <iframe
                width="512"
                height="288"
                src="https://player.vimeo.com/video/599579818?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=a0deca7b32"
              ></iframe>
              </div>
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <Card className={classes.root}>
                <CardHeader
                  align="left"
                  avatar={
                    <Avatar alt="Mick White" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3152123/settings_images/FtJgiPhtTE6KMfcyTFIC_120903065_10158492341299373_1571312014878542166_o.jpg" className={classes.large}/>
                  }
                  title="Instructor: Mick White"
                  subheader="Founder - 100 Year Manifesto"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  "To live with intentionality. A framework for living. A commitment to be who you are capable of being. A commitment to live a better life. Your life on purpose. Your business. Your life. For good.”
                  </Typography>
                </CardContent>
                </Card>
            </Grid>
          </Grid>
          <Grid container item xs={6} className="rightOfVideo">
            <Grid item xs={12}>
              <h3>Logistics for the course:</h3>
              <p>Each section of this course has a short video & a worksheet.
                  The video is the content for the section.  The overview and philosophy behind each topic.
                  The worksheets make the 100 Year Manifesto yours.  Spend some time filling out each worksheet.  Creating your own 100 Year Manifesto.  The deeper you go, the more meaningful the 100 Year Manifesto you create for your life.</p>
            </Grid>
            <Grid item xs={12} align="center" justify="center">
                <form onSubmit={editName}>
                  <TextField
                      id="outlined-required"
                      label="Your Preferred Name"
                      style={{ width: "66%" }}
                      value={name}
                      variant="outlined"
                      className="name"
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Please enter your name"
                    />
                    <button className={classes.button} type="submit">SAVE</button>
                </form>
                <br></br>
                <button className={classes.button} onClick={() => history.push("/missionStatement")}>NEXT</button>
            </Grid>
          </Grid>
        </Grid>
        <Grid align="center" item xs={12}>      
            <h4>Questions? Send us an email at team@100yearmanifesto.com</h4>
            <h4>When you complete the course, you’ll be able to save and print your own frame worthy 100 Year Manifesto.</h4>
            <h4>You can also post it on Facebook, Twitter, Instagram, and LinkedIn.  Use the hashtag #my100yearmanifesto</h4>
            <h4>It’s time to start living your 100 Year Manifesto!</h4>                
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Intro;
