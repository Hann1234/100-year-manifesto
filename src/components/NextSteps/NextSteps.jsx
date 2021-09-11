import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//styling
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./NextSteps.css";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import AdminEdits from "../AdminEdits/AdminEdits";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    padding: 8,
  },
  bottomBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

function NextSteps() {
  const additionalQuestions = useSelector(
    (store) => store.additionalQuestionsReducer.additionalQuestions
  );

  const [manifestoTextChallenge, setManifestoTextChallenge] = useState("");
  const [manifestoTextOpportunity, setManifestoTextOpportunity] = useState("");
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [additionalQuestionToEdit, setAdditionalQuestionToEdit] = useState(0);
  const [editAdditionalQuestionText, setEditAdditionalQuestionText] = useState(0);
  const page_id = 8;


  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_ADDITIONAL_QUESTIONS",
    });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });

    //more reset state to useEffect when page is reloaded - test to make sure it works as intended.
    setManifestoTextChallenge("");
    setManifestoTextOpportunity("");
    setManifestoText("");
    setEditManifestoText("");
    setAdditionalQuestionToEdit(0);
  }, []);

  const addAdditionalQuestion = (question, answer) => {
    dispatch({
      type: "ADD_ADDITIONAL_QUESTION",
      payload: {
        question: question,
        manifestoText: answer,
      },
    });

  };

  const editAdditionalQuestion = (id, question) => {
    dispatch({
      type: "UPDATE_ADDITIONAL_QUESTION",
      payload: {
        id: id,
        question: question,
        manifestoText: editAdditionalQuestionText,
      },
    });
  };

  const deleteAdditionalQuestion = (id) => {
    dispatch({
      type: "DELETE_ADDITIONAL_QUESTION",
      payload: id,
    });
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
          <Grid item xs={8} className="scrollableDiv">
            <center>
              <h1>Next Steps</h1>
              <h3>
                There is no greater gift you can give yourself than a defining
                purpose to live with intentionality for which you were designed
                to impact the world.
              </h3>
              <h3>
                After listening to the video about how 1 commitment changed
                Mick’s life, commit to living your 100 Year Manifesto.
              </h3>
              <h3>Live your life on purpose. Live your 100 Year Manifesto.</h3>
            </center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://player.vimeo.com/video/599581279?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=13b057a783"
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo">
                  {/* add color and font options here as stretch goal */}
                </section>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <center>
                <section>
                  <h3>
                    Tell us a little more about you as some final thoughts
                    reflecting on your 100 Year Manifesto journey!
                  </h3>
                  <p></p>
                </section>
              </center>
            </Grid>
            {/* <Grid item xs={12}>
            <center>
              <section>
                <h3>If you’re not into scriptures, there are quotes. Power phrases. Things your parents said. Things you say. Passages from books.</h3>
              </section>
            </center>
            </Grid> */}
            <Grid item xs={12} container spacing={2}>
              <section>
                <div style={{margin: "10px"}}>What is the biggest challenge you face?</div>
                <TextField
                  required
                  id="outlined-optional"
                  label="Biggest Challenge (Optional)"
                  value={manifestoTextChallenge}
                  variant="outlined"
                  onChange={(event) => setManifestoTextChallenge(event.target.value)}
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#1c4bd9",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addAdditionalQuestion("What is the biggest challenge you face?", manifestoTextChallenge)}
                >
                  ADD
                </Button>
              </section>
            </Grid>
            <br />

            <Grid item xs={12} container spacing={2}>
              <section>
                <div style={{margin: "10px"}}>What do you hope the 100 Year Manifesto will help you in your life?</div>
                <TextField
                  required
                  id="outlined-required"
                  label="100 Year Manifesto Life Opportunity"
                  value={manifestoTextOpportunity}
                  variant="outlined"
                  onChange={(event) => setManifestoTextOpportunity(event.target.value)}
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#1c4bd9",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addAdditionalQuestion("What do you hope the 100 Year Manifesto will help you in your life?", manifestoTextOpportunity)}
                >
                  ADD
                </Button>
              </section>
            </Grid>

            <Grid item xs={12} container spacing={2}>
              {additionalQuestions.map((question) => {
                if (question.id === additionalQuestionToEdit) {
                  return (
                    <Grid key={question.id} item xs={5}>
                      <div style={{margin: "10px"}}>{question.question}</div>
                      <TextField
                        id="outlined-required"
                        placeholder={additionalQuestions.manifesto_text}
                        variant="outlined"
                        onChange={(event) =>
                          setEditAdditionalQuestionText(event.target.value)
                        }
                      />
                      <Button
                        id={question.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => editAdditionalQuestion(question.id, question.question)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (question.id != additionalQuestionToEdit) {
                  return (
                    <Grid key={question.id} item xs={5}>
                      <div style={{margin: "10px"}}>{question.question}</div>
                      <TextField
                        style={{width: "100%"}}
                        disabled
                        id="outlined-required"
                        // label="Your Biggest Challenge"
                        value={question.manifesto_text}
                        variant="outlined"
                        onChange={(event) =>
                          setManifestoText(event.target.value)
                        }
                      />
                      <Button
                        id={question.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => {setAdditionalQuestionToEdit(question.id); setEditAdditionalQuestionText(question.manifesto_text);}}
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
                        onClick={() => deleteAdditionalQuestion(question.id)}
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
                onClick={() => history.push("/homepage")}
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

export default NextSteps;
