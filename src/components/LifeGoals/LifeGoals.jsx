import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./LifeGoals.css";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import AdminEdits from "../AdminEdits/AdminEdits";
import Fade from "@material-ui/core/Fade";

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

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
    padding: 8,
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
    marginLeft: 2
  },
  buttonEdit: {
    background: "linear-gradient(45deg, #1c4bd9 30%, #261385 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 28,
    padding: "0 30px",
    marginLeft: 2
  },
  buttonSave: {
    background: "linear-gradient(45deg, #7bd91c 30%, #12b525 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 28,
    padding: "0 30px",
    marginLeft: 2
  },
  bottomBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

function LifeGoals() {
  const lifeGoal = useSelector((store) => store.lifeGoalsReducer.lifeGoals);
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [itemToEdit, setItemToEdit] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const page_id = 6;

  useEffect(() => {
    dispatch({ type: "FETCH_LIFE_GOALS" });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });
  }, []);

  const addLifeGoal = () => {
    if (manifestoText === "") {
    } else {
      dispatch({
        type: "ADD_LIFE_GOAL",
        payload: { manifestoText: manifestoText },
      });
      setManifestoText("");
    }
  };

  const startEdit = (itemToEdit) => {
    setEditManifestoText(itemToEdit.manifesto_text);
    setItemToEdit(itemToEdit.id);
  };

  const editLifeGoal = (id) => {
    dispatch({
      type: "UPDATE_LIFE_GOAL",
      payload: { id: id, manifestoText: editManifestoText },
    });
    setEditManifestoText("");
    setItemToEdit(0);
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
                  default_value={"Life Goals"}
                />
              </h1>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"above_vid"}
                  default_value={`
                    Your life goals. Make them yours. For your whole life. Something
                    to reflect on one day & say, “Well done, you lived your life on
                    purpose.” You achieved the goals you set out to achieve. You
                    lived the life worthy of the calling you received.
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
                    "https://player.vimeo.com/video/599580195?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=5321e6f5c6"
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
                        This is a place for your goals. These goals may or may not
                        be goals you can measure. Think about what you want to
                        accomplish in your life. Think about who you want to be.
                        Think about what you can do.
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid2"}
                      default_value={`
                        10 Goals for You. For your life.
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid3"}
                      default_value={`
                        For me, they include:
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid4"}
                      default_value={`
                        “Be the man, father, & husband God created me to be.“ “Build
                        a business allowing for remote work anywhere in the world.“
                        “Raise healthy boys who love themselves, their family, &
                        their God: who serve others, lead by example, & do their
                        best every single day of their lives.“
                      `}
                    />
                  </p>
                </section>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <section>
                <h3>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"bottom"}
                    default_value={`
                      WHAT ARE YOU LIFE GOALS?
                    `}
                  />
                </h3>
              </section>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <section>
                <CssTextField
                  required
                  style={{ width: "48%" }}
                  id="outlined-required"
                  label="Add lifeGoal"
                  value={manifestoText}
                  variant="outlined"
                  onChange={(evt) => setManifestoText(evt.target.value)}
                />
                {lifeGoal.length >= 10 ? (
                  <Button
                    disabled
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    onClick={() => addLifeGoal()}
                  >
                    ADD
                  </Button>
                ) : (
                  <Button
                    type="submit"
                   className={classes.button}
                    variant="contained"
                    onClick={() => addLifeGoal()}
                  >
                    ADD
                  </Button>
                )}
              </section>
            </Grid>
            <br />
            <Grid item xs={12} container spacing={2}>
              {lifeGoal.map((lifeGoal) => {
                if (lifeGoal.id === itemToEdit) {
                  return (
                    <Grid key={lifeGoal.id} item xs={6}>
                      <CssTextField
                        id="outlined-required"
                        style={{ width: "100%" }}
                        placeholder={lifeGoal.manifesto_text}
                        variant="outlined"
                        onChange={(evt) =>
                          setEditManifestoText(evt.target.value)
                        }
                      />
                      <Button
                        id={lifeGoal.id}
                        type="submit"
                        className={classes.buttonSave}
                        variant="contained"
                        onClick={() => editLifeGoal(lifeGoal.id)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (lifeGoal.id != itemToEdit) {
                  return (
                    <Grid key={lifeGoal.id} item xs={6}>
                      <CssTextField
                        disabled
                        id="outlined-required"
                        label="Your Life Goal"
                        style={{ width: "100%" }}
                        value={lifeGoal.manifesto_text}
                        variant="outlined"
                        onChange={(evt) => setManifestoText(evt.target.value)}
                      />
                      <Button
                        id={lifeGoal.id}
                        type="submit"
                        className={classes.buttonEdit}
                        variant="contained"
                        onClick={() => startEdit(lifeGoal)}
                      >
                        Edit
                      </Button>
                      <Button
                        type="submit"
                        className={classes.buttonRemove}
                        variant="contained"
                        onClick={() => deleteLifeGoal(lifeGoal.id)}
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

export default LifeGoals;
