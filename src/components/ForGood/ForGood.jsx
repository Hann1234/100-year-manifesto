import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./ForGood.css";
import { useHistory } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import CompleteButton from "../CompleteButton/CompleteButton";

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
  textfield: {
    height: "30vh",
  },
}));

function ForGood() {
  const ForGood = useSelector((store) => store.forGoodReducer.forGood);
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [itemToEdit, setItemToEdit] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FOR_GOODS" });
  }, []);

  const addForGood = () => {
    dispatch({
      type: "ADD_FOR_GOOD",
      payload: { manifestoText: manifestoText },
    });
    setManifestoText("");
  };

  const startEdit = (itemToEdit) => {
    setEditManifestoText(itemToEdit.manifesto_text);
    setItemToEdit(itemToEdit.id);
  };

  const editForGood = (id) => {
    dispatch({
      type: "UPDATE_FOR_GOOD",
      payload: { id: id, manifestoText: editManifestoText },
    });
    setEditManifestoText("");
    setItemToEdit(0);
  };

  const deleteForGood = (id) => {
    dispatch({ type: "DELETE_FOR_GOOD", payload: id });
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
            <center>
              <h1>For Good</h1>
              <h3>What’s you’re greater good?  

What causes & organizations are you passionate about?

Your “For Good”.</h3>
            </center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://player.vimeo.com/video/599579107?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=ca6854132e"
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo2">
                  <p>
                    FOR GOOD For a long time I heard the phrase, by older &
                    wiser folks. It puzzled me. I never really understood it.
                    And, I was too embarrassed to ask what it meant. The older &
                    wiser I get the more the phrase resonates. Living in a big
                    city, I see a lot of people from all walks of life. Some of
                    them are heading to sporting events & concerts, some are
                    working at the restaurants & hotels, some are corporate
                    suits, but it’s the ones on the corner asking for change –
                    those are the ones I really think about. While they may be
                    homeless – they are also somebody’s brother – somebody’s
                    sister – somebody’s father – somebodys daughter. They are
                    real people. I’ve never heard a grade schooler answer the
                    question “what do you want to be when you grow up?” with the
                    answer “homeless, missing a few teeth, out of touch with
                    those I love the most, begging for money, & wearing the same
                    clothes I wore for the past week.” One of the ladies in
                    particular catches my attention. I’m not sure what it is
                    about her, but she reminds me of my Mom. Yes, my Mom. One of
                    my heroes. One of the people who loved me the most in life.
                    And, I think to myself – had Mom been in a big city versus
                    the small, rural community of Galesburg, Illinois – had she
                    been in a big city when she was going through her dark days,
                    would she too be on the corner – would she too be digging in
                    the trash looking for a treasure – would she too be one of
                    “those” people. Somebody’s Brother is a cause I’m passionate
                    about. It’s something greater than myself. It’s something
                    that makes me feel alive. Real impact on real people. Jesus
                    talked about, “Whatever you do unto the least of these, you
                    do unto me.” I like to think, Somebody’s Brother is doing
                    good unto the least of these.
                  </p>
                </section>
              </Grid>
            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={12} container spacing={2}>
              <center className="rightOfVideo">
                <p>
                  Whether you volunteer at the local rescue mission, build
                  houses with Habitat for Humanity, or volunteer at the animal
                  shelter – find a cause worth serving. Find something bigger
                  than yourself. At the end of Schindler’s List, the Oscar
                  Schindler is fleeing for his life. He had just saved the lives
                  of 1,000 Jews. There are more descendants alive today from
                  those 1,000 Jews than were alive in Poland at the end of World
                  War II. He’s ready to leave & all the people he saved show up
                  to say goodbye. Oscar Schindler looks down at his lapel & at
                  his ring – he stammers – I could have done more. 2 more
                  people. I could have done more. He’s filled with regret for
                  not having a greater impact in the world. Not more for
                  himself, but for the greater good.
                </p>
              </center>
            </Grid>
            <Grid item xs={12}>
              <section>
                <h3>
                  What’s you’re greater good? What are 2-3-4 causes you’re
                  passionate about. For Good
                </h3>
              </section>
            </Grid>
            <Grid item xs={12}>
              <section>
              <TextField
                  required
                  style={{ height: "10vh" }}
                  id="outlined-required"
                  placeholder="Add For Good"
                  value={manifestoText}
                  multiline={true}
                  variant="outlined"
                  onChange={(evt) => setManifestoText(evt.target.value)}
                />

                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#1c4bd9",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addForGood()}
                >
                  ADD
                </Button>
              </section>
            </Grid>

            <Grid item xs={12} container spacing={2}>
              {ForGood.map((ForGood) => {
                if (ForGood.id === itemToEdit) {
                  return (
                    <Grid key={ForGood.id} item xs={3}>
                      <TextField
                        required
                        
                        id="outlined-required"
                        value={ForGood.manifest_text}
                        multiline={true}
                        variant="outlined"
                        onChange={(evt) =>
                          setEditManifestoText(evt.target.value)
                        }
                      />
                      <Button
                        id={ForGood.id}
                        style={{ width: 450 }}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#7bd91c",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => editForGood(ForGood.id)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (ForGood.id != itemToEdit) {
                  return (
                    <Grid key={ForGood.id} item xs={3}>
                      <TextField
                        disabled
                        
                        id="outlined-required"
                        value={ForGood.manifesto_text}
                        multiline={true}
                        variant="outlined"
                        onChange={(evt) => setManifestoText(evt.target.value)}
                      />
                      <Button
                        id={ForGood.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#1c4bd9",
                          color: "#fff",
                        }}
                        variant="contained"
                        onClick={() => startEdit(ForGood)}
                      >
                        Edit
                      </Button>
                      <span> </span>
                      <Button
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#d91c1c",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => deleteForGood(ForGood.id)}
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

export default ForGood;
