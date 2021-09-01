import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import "./LifeGoals.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
    padding: theme.spacing(2),
    textAlign: "center",
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
    color: "#132411",
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

function Mantras(props) {
  const mantras = useSelector((store) => store.mantrasReducer.mantras);
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [lifeGoalToEdit, setLifeGoalToEdit] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_LIFEGOALS" });
  }, []);

  const addLifeGoal = () => {
    dispatch({ type: "ADD_LIFE_GOAL", payload: { manifestoText: manifestoText } });
    setManifestoText("");
  };

  const editLifeGoal = (id) => {
    dispatch({
      type: "UPDATE_LIFE_GOAL",
      payload: { id: id, manifestoText: editManifestoText },
    });
    setEditManifestoText("");
    setLifeGoalToEdit(0);
  };

  const deleteLifeGoal = (id) => {
    dispatch({ type: "DELETE_LIFE_GOAL", payload: id });
  };

  return (
    <section>
      <div>
        {/* Prototype Grid layout */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              this is where the manifesto goes I do not know if we thought about
              this but almost all of our pages are going to follw a vary
              spacific grid layout so it should be atop priority to get that
              layout figured out so we can all have it for our pages
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <center><h1>Life Goals</h1></center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://kajabi-storefronts-production.s3.amazonaws.com/sites/143056/video/fD1gQrdtQNaNhyn5lHE8_100_-_DIY_-_Words_to_Live_By_v2.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20210827%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210827T143745Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c2281cd22f2b0ecc903ec64e00a4287b979f846ef4a69449bba6a1cfb5f6698b"
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo">
                  <p>
                  This is a place for your goals. These goals may or may not be goals you can measure. Think about what you want to accomplish in your life. Think about who you want to be. Think about what you can do.
                  </p>
                  <p>
                  10 Goals for You. For your life.
                  </p>
                  <p>For me, they include:</p>
                  <p>
                  “Be the man, father, & husband God created me to be.“
“Build a business allowing for remore work anywhere in the world.“
“Raise healthy boys who love themselves, their family, & their God: who serve others, lead by example, & do their best every single day of their lives. “
                  </p>
                </section>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <section>
                <h3>
                WHAT ARE YOU LIFE GOALS?
                </h3>
              </section>
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <section>
                <TextField
                  required
                  id="outlined-required"
                  label="Add lifeGoal"
                  value={manifestoText}
                  variant="outlined"
                  onChange={(evt) => setManifestoText(evt.target.value)}
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#bec9bc",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addLifeGoal()}
                >
                  ADD
                </Button>
              </section>
            </Grid>

            <Grid item xs={12} container spacing={2}>
              {mantras.map((lifeGoal) => {
                if (lifeGoal.id === lifeGoalToEdit) {
                  return (
                    <Grid key={lifeGoal.id} item xs={3}>
                      <TextField
                        id="outlined-required"
                        placeholder={lifeGoal.manifesto_text}
                        variant="outlined"
                        onChange={(evt) =>
                          setEditManifestoText(evt.target.value)
                        }
                      />
                      <Button
                        id={lifeGoal.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => editLifeGoal(mantra.id)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (lifeGoal.id != lifeGoalToEdit) {
                  return (
                    <Grid key={lifeGoal.id} item xs={3}>
                      <TextField
                        disabled
                        id="outlined-required"
                        label="Your Mantras"
                        value={lifeGoal.manifesto_text}
                        variant="outlined"
                        onChange={(evt) => setManifestoText(evt.target.value)}
                      />
                      <Button
                        id={lifeGoal.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => setLifeGoalToEdit(mantra.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => deleteLifeGoal(mantra.id)}
                      >
                        Remove
                      </Button>
                    </Grid>
                  );
                }
              })}
            </Grid>
            <Box
  component="span"
  m={1} //margin
  className={`${classes.bottomBox} ${classes.box}`}
>
  <Button 
    variant="contained" 
    color="primary" 
    style={{ height: 40 }}
    onClick={() => history.push('/corevalues')}
  >
    Next
  </Button>
</Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Mantras;