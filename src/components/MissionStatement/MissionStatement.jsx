import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
//**Clean up unused components!! */

//Material UI styling components
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";

//Import Button components for Stepper Bar in Nav bar.
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import CompleteButton from "../CompleteButton/CompleteButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  //paper will be for Manifesto display.
  paper: {
    height: "100vh",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#475473",
  },
  //paper2 is for the video
  paper2: {
    height: "14vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  //paper3 is where all the main text will be displayed.
  paper3: {
    // height: "60vh",
    maxHeight: "60vh",
    overflow: "auto",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#475473",
  },
  //paper4 is where the input field is.
  paper4: {
    height: "30vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#bdbfbf",
  },
  paper5: {
    maxHeight: "46vh",
    overflow: "auto",
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

function MissionStatement() {
  const [missionText, setMissionText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [editMissionText, setEditMissionText] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const missions = useSelector((store) => store.missionReducer.mission);
  const [heading, setHeading] = useState("Functional Component");
  console.log(`What is missions store? `, missions);

  const classes = useStyles();

  useEffect(() => {
    //Need a dispatch to load the static part of page and activate GET to pull in DB data for MissionStatement.
    dispatch({ type: "FETCH_MISSION" });
  }, []);

  //Need handleChange to setMission in input field
  const handleMissionChange = () => {
    setMissionText(event.target.value);
  };

  //Need handleSubmit

  const addMission = (event) => {
    event.preventDefault();
    //Need to verify what the dispatch will be for this
    dispatch({ type: "ADD_MISSION", payload: { manifestoText: missionText } });
    console.log(`What's the current state of mission?`, missionText);
    setMissionText("");
  };

  const editMission = (id) => {
    dispatch({
      type: "UPDATE_MISSION",
      payload: { id: id, manifestoText: editManifestoText },
    });
    setEditManifestoText("");
    setEditMissionText(0);
  };

  const deleteMission = (id) => {
    dispatch({ type: "DELETE_MISSION", payload: id });
  };

  return (
    <section>
      <div>
        {/* Prototype Grid layout */}
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Paper className={classes.paper}>
              This is where the 100 Year Manifesto Poster will be displayed
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <h1>Mission Statement</h1>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper className={classes.paper2}>
                    <CardMedia
                      component="iframe"
                      height="140"
                      image="https://kajabi-storefronts-production.s3.amazonaws.com/sites/143056/video/ya1H0DGQTSCgIZ2mQ9xf_100_-_DIY_-_Mission_Statement_v3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20210827%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210827T143655Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=37e8277b03bfac4c944b72dddb4c3eeb86a5d365c79f76a35123a51a6fce6f71"
                      title="Contemplative Reptile"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper3}>
                    <div>
                      <h3>Mission Statement</h3>
                      <p>
                        Your 100 Year Manifesto starts with your mission
                        statement. There is no great gift you can give yourself
                        than a defining purpose. A mission statement. To live
                        with intentionality for the cause which you were
                        created.
                      </p>
                      <p>
                        Your life is worthy of a noble motive. What is it?
                        Dedicating your life to a cause greater than yourself is
                        a game-changer. A personal mission statement is a
                        powerful tool because it provides a path for success.
                        Just as important, it gives you permission to stay no to
                        the things that are distractions. What's your cause.
                      </p>
                      <p>For me, my mission: "Help others live better."</p>
                      <p>
                        My mission in life is to make people happy." Walt
                        Disney's mission statement.
                      </p>
                      <p>
                        "To be a teacher. And to be known for inspiring my
                        students to be more than they thought they could be."
                        Oprah Winfrey's mission statement.
                      </p>
                      <p>
                        Your mission statement. Make it yours. Write it however
                        you want. Keep it brief. Keep it meaningful. Keep it
                        yours. What were you born to do? Who are you called to
                        be?
                      </p>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper4}>
                  <form onSubmit={addMission}>
                    <center>
                      <h2>Mission Statement: </h2>
                      <input
                        className="missionText"
                        value={missionText}
                        onChange={(event) =>
                          handleMissionChange(event.target.value)
                        }
                        placeholder="Your Mission Statement"
                        required
                      />
                      <Button
                        type="submit"
                        style={{
                          height: "56px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => addMission(event)}
                      >
                        ADD
                      </Button>
                      <NextButton/>
                      <BackButton/>
                      <CompleteButton/>
                    </center>
                  </form>
                </Paper>
              </Grid>

              {/* Need to append data from mission DB here */}
              <Grid item xs={12} container spacing={2}>
              <Paper className={classes.paper5}>
                {missions.map((mission) => {
                  if (mission.id === editMissionText) {
                    return (
                      <Grid key={mission.id} item xs={3}>
                        <TextField
                          id="outlined-required"
                          placeholder={mission.manifesto_text}
                          variant="outlined"
                          onChange={(evt) =>
                            setEditManifestoText(evt.target.value)
                          }
                        />
                        <Button
                          id={mission.id}
                          type="submit"
                          style={{
                            height: "28px",
                            backgroundColor: "#bec9bc",
                            color: "#132411",
                          }}
                          variant="contained"
                          onClick={() => editMission(mission.id)}
                        >
                          SAVE
                        </Button>
                      </Grid>
                    );
                  }
                  if (mission.id != editMission) {
                    return (
                      <Grid key={mission.id} item xs={3}>
                        <TextField
                          disabled
                          id="outlined-required"
                          label="Your Mission Statements"
                          value={mission.manifesto_text}
                          variant="outlined"
                          onChange={(evt) => setMissionText(evt.target.value)}
                        />
                        <Button
                          id={mission.id}
                          type="submit"
                          style={{
                            height: "28px",
                            backgroundColor: "#bec9bc",
                            color: "#132411",
                          }}
                          variant="contained"
                          onClick={() => setEditMissionText(mission.id)}
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
                          onClick={() => deleteMission(mission.id)}
                        >
                          Remove
                        </Button>
                      </Grid>
                    );
                  }
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

export default MissionStatement;
