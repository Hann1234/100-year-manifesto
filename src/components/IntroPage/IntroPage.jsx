import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
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
  
  divider: {
    margin: theme.spacing(2, 0),
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
          <AutoScale>
              <Manifesto />
            </AutoScale>
          </Grid>
          <Grid item xs={8}>
            
            <center>
              <h1>Intro: Your 100 Year Manifesto</h1>
                <h2>Welcome to The 100 Year Manifesto.  We are so glad you’re here.</h2>
                <br></br>
                <h2>Your 100 Year Manifesto is your framework for living.</h2>
                <br></br>
                <h2>For living with intentionality.  For living the life worthy of the calling you received.</h2>
            </center>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  
                  {/* under the video we will include Micks information add another Grid component for Micks info?*/}
                  <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://player.vimeo.com/video/599579818?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=a0deca7b32"
                  ></iframe>
                </div>
                    <br></br>
                    {/* make Mick's information a separate card with circled avatar pic */}
                    <h3>Instructor: Mick White</h3>
                    <br></br>
                    <h4>Founder - 100 Year Manifesto</h4>
                    <br></br>
                    <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3152123/settings_images/FtJgiPhtTE6KMfcyTFIC_120903065_10158492341299373_1571312014878542166_o.jpg" alt="Mick White" />
                    <h4>"To live with intentionality. A framework for living. A commitment to be who you are capable of being. A commitment to live a better life. Your life on purpose. Your business. Your life. For good.”</h4>
                  
                </Grid>
                <Grid item xs={6}>
                  
                    <h3>Logistics for the course:</h3>
                    <br></br>
                    <h4>Each section of this course has a short video & a worksheet.</h4>
                    <br></br>
                    <h4>The video is the content for the section.  The overview and philosophy behind each topic.</h4>
                    <br></br>
                    <h4>The worksheets make the 100 Year Manifesto yours.  Spend some time filling out each worksheet.  Creating your own 100 Year Manifesto.  The deeper you go, the more meaningful the 100 Year Manifesto you create for your life.</h4>
                    <form onSubmit={editName}>
                        <input
                            className="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Please enter preferred name"
                        />
                        <button className="nameButton" type="submit">SAVE</button>
                    </form>
                  
                </Grid>
              </Grid>
              <Grid item xs={12}>
                
                <center>
                  <h4>Questions? Send us an email at team@100yearmanifesto.com</h4>
                  <br></br>
                  <h4>When you complete the course, you’ll receive your own frame worthy 100 Year Manifesto.</h4>
                  <br></br>
                  <h4>You can also post it on Facebook, Twitter, Instagram, & LinkedIn.  Use the hashtag #my100yearmanifesto</h4>
                  <br></br>
                  <h4>It’s time to start living your 100 Year Manifesto!</h4>
                  <button className="nextButton" onClick={() => history.push('/missionStatement')}>NEXT</button>
                </center>
                
              </Grid>
            
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Intro;
