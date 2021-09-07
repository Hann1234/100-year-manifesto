import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./Mantras.css";
import { useHistory } from "react-router-dom";
import CompleteButton from "../CompleteButton/CompleteButton";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto"

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
  bottomBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

function Mantras(props) {
  const mantras = useSelector((store) => store.mantrasReducer.mantras);
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [mantraToEdit, setMantraToEdit] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MANTRAS" });
  }, []);

  const addMantra = () => {
    dispatch({ type: "ADD_MANTRA", payload: { manifestoText: manifestoText } });
    setManifestoText("");
  };

  const editMantra = (id) => {
    dispatch({
      type: "UPDATE_MANTRA",
      payload: { id: id, manifestoText: editManifestoText },
    });
    setEditManifestoText("");
    setMantraToEdit(0);
  };

  const deleteMantra = (id) => {
    dispatch({ type: "DELETE_MANTRA", payload: id });
  };

  return (
    <section>
      <div>
        {/* Prototype Grid layout */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <AutoScale>
              <Manifesto/>
            </AutoScale>
          </Grid>
          <Grid item xs={8}  className="scrollableDiv">
            <center><h1>Words To Live By</h1></center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://player.vimeo.com/video/599580455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=f2cf5fad43"
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo">
                  <p>
                    Having a framework for decisions is critical to living a
                    life on purpose. Guiding principles set forth through “Words
                    to Live By.” When life brings uncertainty through events,
                    circumstances, & difficult moments having a compass to guide
                    your decisions is necessary.
                  </p>
                  <p>
                    These are one, two, or three word sentences or phrases.
                    Simple concepts that really resonate to your core.
                  </p>
                  <p>
                    This framework might include quotes from some of the lessons
                    you learned growing up, simple mantras you’ve picked up
                    along the way, or phrases you repeat to yourself throughout
                    the day.
                  </p>
                </section>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <section className="BottomText">
                <p>
                  Here are some of our favorites: Own your ugly Zip-a-dee-do-dah
                  Make it a Masterpiece Live. Laugh. Love. Simplify. Simplify.
                  Love unconditionally Embrace the uncertainty
                </p>
                <p>
                  What are meaningful words that provide a framework for your
                  decisions & your life?{" "}
                </p>
                <h3>List 5-10 words & phrases you live by:</h3>
              </section>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <section>
                <TextField
                  required
                  id="outlined-required"
                  label="Add Mantra"
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
                  onClick={() => addMantra()}
                >
                  ADD
                </Button>
              </section>
            </Grid>
                  <br />
            <Grid item xs={12} container spacing={2}>
              {mantras.map((mantra) => {
                if (mantra.id === mantraToEdit) {
                  return (
                    <Grid key={mantra.id} item xs={3}>
                      <TextField
                        id="outlined-required"
                        placeholder={mantra.manifesto_text}
                        variant="outlined"
                        onChange={(evt) =>
                          setEditManifestoText(evt.target.value)
                        }
                      />
                      <Button
                        id={mantra.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => editMantra(mantra.id)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (mantra.id != mantraToEdit) {
                  return (
                    <Grid key={mantra.id} item xs={3}>
                      <TextField
                        disabled
                        id="outlined-required"
                        label="Your Mantras"
                        value={mantra.manifesto_text}
                        variant="outlined"
                        onChange={(evt) => setManifestoText(evt.target.value)}
                      />
                      <Button
                        id={mantra.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => setMantraToEdit(mantra.id)}
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
                        onClick={() => deleteMantra(mantra.id)}
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
              <CompleteButton />
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Mantras;