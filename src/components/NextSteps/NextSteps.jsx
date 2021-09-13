import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//styling
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./NextSteps.css";
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
    background: "linear-gradient(45deg, #BD2626 30%, #940635 90%)",
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
  editText: {
    color: "white",
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
          <Fade in={true} timeout={800}>
          <Grid item xs={8} className="scrollableDiv">
            <center>
              <h1>
                <AdminEdits
                  page_id={page_id}
                  html_id={"header"}
                  default_value={`Next Steps`}
                />
              </h1>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"above_vid1"}
                  default_value={`
                  There is no greater gift you can give yourself than a defining
                  purpose to live with intentionality for which you were designed
                  to impact the world.
                  `}
                />
              </h3>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"above_vid2"}
                  default_value={`
                  After listening to the video about how one commitment changed
                  Mick’s life, commit to living your 100 Year Manifesto.
                  `}
                />
              </h3>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"above_vid3"}
                  default_value={`
                  Live your life on purpose. Live your 100 Year Manifesto.
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
                    "https://player.vimeo.com/video/599581279?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=13b057a783"
                  }
                />
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
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom1"}
                      default_value={`
                      Tell us a little more about you as some final thoughts
                      reflecting on your 100 Year Manifesto journey!
                      `}
                    />
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
                <div style={{margin: "10px"}}>
                  <h3>
                  <AdminEdits
                      page_id={page_id}
                      html_id={"question1"}
                      default_value={`What is the biggest challenge you face?`}
                    />
                  </h3>
                </div>
                <CssTextField
                  required
                  id="outlined-optional"
                  label="Biggest Challenge"
                  value={manifestoTextChallenge}
                  variant="outlined"
                  onChange={(event) => setManifestoTextChallenge(event.target.value)}
                />
                <Button
                  type="submit"
                  className={classes.button}
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
                <div style={{margin: "10px"}}>
                  <h3>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"question2"}
                    default_value={`What do you hope the 100 Year Manifesto will help you do in your life?`}
                  />
                  </h3>
                </div>
                <CssTextField
                  required
                  id="outlined-required"
                  label="Life Opportunity"
                  value={manifestoTextOpportunity}
                  variant="outlined"
                  onChange={(event) => setManifestoTextOpportunity(event.target.value)}
                />
                <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  onClick={() => addAdditionalQuestion("What do you hope the 100 Year Manifesto will help you do in your life?", manifestoTextOpportunity)}
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
                      <CssTextField
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
                        className={classes.buttonSave}
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
                      <CssTextField
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
                        className={classes.buttonEdit}
                        variant="contained"
                        onClick={() => {setAdditionalQuestionToEdit(question.id); setEditAdditionalQuestionText(question.manifesto_text);}}
                      >
                        Edit
                      </Button>
                      <Button
                        type="submit"
                        className={classes.buttonRemove}
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
                className={classes.button}
                onClick={() => history.push("/myManifesto")}
              >
                My Manifesto
              </Button>
            </Box>
          </Grid>
          </Fade>
        </Grid>
      </div>
    </section>
  );
}

export default NextSteps;
