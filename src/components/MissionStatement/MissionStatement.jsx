import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
//**Clean up unused components!! */

//Material UI styling components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./MissionStatement.css";
import Fade from "@material-ui/core/Fade";

//Import Button components for Stepper Bar in Nav bar.
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import AdminEdits from "../AdminEdits/AdminEdits";

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  box: {
    display: "flex",
    padding: 8,
  },
  bottomBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },

  buttonRemove: {
    background: "linear-gradient(45deg, #bd2626 30%, #940635 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 28,
    width: 100,
    padding: "0 30px",
    marginLeft: 2,
  },
  buttonEdit: {
    background: "linear-gradient(45deg, #1c4bd9 30%, #261385 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 28,
    padding: "0 30px",
    marginLeft: 2,
  },
  buttonSave: {
    background: "linear-gradient(45deg, #7bd91c 30%, #12b525 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 28,
    padding: "0 30px",
    marginLeft: 2,
  },
}));

function MissionStatement() {
  const [missionText, setMissionText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [editMissionText, setEditMissionText] = useState(0);
  const dispatch = useDispatch();

  const missions = useSelector((store) => store.missionReducer.mission);

  const classes = useStyles();
  const page_id = 2;

  useEffect(() => {
    //Need a dispatch to load the static part of page and activate GET to pull in DB data for MissionStatement.
    dispatch({ type: "FETCH_MISSION" });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });
  }, []);

  //Need handleChange to setMission in input field
  const handleMissionText = () => {
    setMissionText(event.target.value);
  };

  //Need handleSubmit
  const addMission = () => {
    if (missionText === "") {
    } else {
      dispatch({
        type: "ADD_MISSION",
        payload: { manifestoText: missionText },
      });
      setMissionText("");
    }
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
            <div className="manifestoPadding">
              <AutoScale>
                <Manifesto />
              </AutoScale>
            </div>
          </Grid>
          <Fade in={true} timeout={800}>
            <Grid item xs={8} className="scrollableDiv">
              <center>
                <h1>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"header"}
                    default_value={`Mission Statement`}
                  />
                </h1>
                <h3>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"above_vid"}
                    default_value={`
                  Your 100 Year Manifesto starts with your mission statement.
                  There is no great gift you can give yourself than a defining
                  purpose. A mission statement. To live with intentionality
                  for the cause which you were created.
                  `}
                  />
                </h3>
              </center>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <AdminEdits
                    page_id={page_id}
                    html_type={"video"}
                    html_id={"video"}
                    default_value={
                      "https://player.vimeo.com/video/599580839?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=a6d13d3de0"
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <section className="rightOfVideo">
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"right_of_vid1"}
                        default_value={`
                      Your life is worthy of a noble motive. What is it?
                      Dedicating your life to a cause greater than yourself is a
                      game-changer. A personal mission statement is a powerful
                      tool because it provides a path for success. Just as
                      important, it gives you permission to stay no to the things
                      that are distractions. What's your cause.
                      `}
                      />
                    </p>
                  </section>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <section className="BottomText">
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom1"}
                      default_value={`For me, my mission: "Help others live better."`}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom2"}
                      default_value={`"My mission in life is to make people happy." Walt Disney's mission statement.`}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom3"}
                      default_value={`
                    "To be a teacher. And to be known for inspiring my students to
                    be more than they thought they could be." Oprah Winfrey's
                    mission statement.
                    `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom3"}
                      default_value={`
                    Your mission statement. Make it yours. Write it however you
                    want. Keep it brief. Keep it meaningful. Keep it yours. What
                    were you born to do? Who are you called to be?
                    `}
                    />
                  </p>
                </section>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={addMission}>
                  <center>
                    <CssTextField
                      id="outlined-required"
                      label="Please Enter Your Mission Statement "
                      style={{ width: "66%" }}
                      value={missionText}
                      variant="outlined"
                      onChange={(evt) => handleMissionText(evt.target.value)}
                    />
                    {missions.length >= 1 ? (
                      <Button
                        disabled
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        onClick={() => addMission()}
                      >
                        ADD
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        onClick={() => addMission()}
                      >
                        ADD
                      </Button>
                    )}
                  </center>
                </form>
              </Grid>
              <br />
              {/* Need to append data from mission DB here */}
              <Grid item xs={12} container spacing={2}>
                {missions.map((mission) => {
                  if (mission.id === editMissionText) {
                    return (
                      <Grid key={mission.id} item xs={12}>
                        <center>
                          <CssTextField
                            id="outlined-required"
                            placeholder={mission.manifesto_text}
                            variant="outlined"
                            style={{ width: "66%" }}
                            onChange={(evt) =>
                              setEditManifestoText(evt.target.value)
                            }
                          />
                          <br />
                          <Button
                            id={mission.id}
                            className={classes.buttonSave}
                            type="submit"
                            variant="contained"
                            onClick={() => editMission(mission.id)}
                          >
                            SAVE
                          </Button>
                        </center>
                      </Grid>
                    );
                  }
                  if (mission.id != editMission) {
                    return (
                      <Grid key={mission.id} item xs={12}>
                        <center>
                          <CssTextField
                            disabled
                            id="outlined-required"
                            label="Your Mission Statements"
                            value={mission.manifesto_text}
                            variant="outlined"
                            style={{ width: "66%" }}
                            onChange={(evt) => setMissionText(evt.target.value)}
                          />
                          <br />
                          <Button
                            id={mission.id}
                            className={classes.buttonEdit}
                            type="submit"
                            variant="contained"
                            onClick={() => setEditMissionText(mission.id)}
                          >
                            Edit
                          </Button>
                          <span> </span>
                          <Button
                            className={classes.buttonRemove}
                            type="submit"
                            variant="contained"
                            onClick={() => deleteMission(mission.id)}
                          >
                            Remove
                          </Button>
                        </center>
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
                <BackButton />
                <NextButton />
              </Box>
            </Grid>
          </Fade>
        </Grid>
      </div>
    </section>
  );
}

export default MissionStatement;
