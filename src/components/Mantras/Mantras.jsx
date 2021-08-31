import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './Mantras.css'

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
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
    color: "#132411",
  },
  paper2: {
    height: "32vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper3: {
    height: "32vh",
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
}));

function Mantras(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");

  const classes = useStyles();

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
            
              
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  
                  <iframe width="512" height="288"
src="https://kajabi-storefronts-production.s3.amazonaws.com/sites/143056/video/fD1gQrdtQNaNhyn5lHE8_100_-_DIY_-_Words_to_Live_By_v2.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20210827%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210827T143745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c2281cd22f2b0ecc903ec64e00a4287b979f846ef4a69449bba6a1cfb5f6698b">
</iframe>
                  
                </Grid>
                <Grid item xs={6}>
                 
                    <section class='rightOfVideo'>
                        <p>
                            Having a framework for decisions is critical to living a
                            life on purpose. Guiding principles set forth through “Words
                            to Live By.” When life brings uncertainty through events,
                            circumstances, & difficult moments having a compass to guide
                            your decisions is necessary. 
                        </p>
                        <p>
                        These are one, two, or three
                            word sentences or phrases. Simple concepts that really resonate to your core.
                        </p>
                        <p>
                        This framework might include quotes from some of the lessons you learned growing up, simple mantras you’ve picked up along the way, or phrases you repeat to yourself throughout the day.
                        </p>
                    </section>
                   
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <section>
                    <h3>Here are some of our favorites: Own your ugly
                         Zip-a-dee-do-dah Make it a Masterpiece Live. Laugh. Love. Simplify. Simplify. Love unconditionally Embrace the uncertainty</h3>
                  <p>

                  </p>
                  </section>
              </Grid>
              <Grid item xs={12}>
                <section>
                    <h3>What are meaningful words that provide a framework for your decisions & your life? </h3>
                  <h3>List 5-10 words & phrases you live by:</h3>
                  </section>
              </Grid>
              <Grid item xs={12}>
                <section>
                <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
                  </section>
              </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Mantras;
