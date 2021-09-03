import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//styling
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import './GuidingPrinciples.css';

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

function NextSteps(props) {

  const additionalQuestions = useSelector((store) => store.additionalQuestionsReducer.additionalQuestions);

  const [manifestoText, setManifestoText] = useState('');
  const [editManifestoText, setEditManifestoText] = useState('');
  const [additionalQuestionToEdit, setAdditionalQuestionToEdit] = useState(0);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
        type: 'FETCH_ADDITIONAL_QUESTIONS'
    });

    //more reset state to useEffect when page is reloaded - test to make sure it works as intended.
    setManifestoText('');
    setEditManifestoText('');
    setAdditionalQuestionToEdit(0);

  }, []);

  const addAdditionalQuestion = () => {
    dispatch({
        type: 'ADD_ADDITIONAL_QUESTION', 
        payload: {
            manifestoText: manifestoText
        }});

        // setManifestoText(''); - Moved to useEffect

  };

  const editAdditionalQuestion = (id) => {
    dispatch({
        type: 'UPDATE_ADDITIONAL_QUESTION',
        payload: { 
            id: id,
            manifestoText: editManifestoText
        },
    });

    // setEditManifestoText(''); - Moved to useEffect
    // setAdditionalQuestionToEdit(0);

  };

  const deleteAdditionalQuestion = (id) => {
    dispatch({
        type: 'DELETE_ADDITIONAL_QUESTION', 
        payload: id
    });
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
                <h1>Next Steps</h1>
                <h3>There is no greater gift you can give yourself than a defining purpose to live with intentionality for which you were designed to impact the world.</h3>
                <h3>After listening to the video about how 1 commitment changed Mick’s life, commit to living your 100 Year Manifesto.</h3>
                <h3>Live your life on purpose.  Live your 100 Year Manifesto.</h3>
            </center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://kajabi-storefronts-production.s3.amazonaws.com/sites/143056/video/ZQvfuDoSbe8TegN04BRL_100_-_DIY_-_Next_Steps_v3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20210827%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210827T144500Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=eb3a30b0232720e1c70eda502ae7bde5229db06e00f8effa963ceefb63b5454d"
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
                <h3>Tell us a little more about you as some final thoughts reflecting on your 100 Year Manifesto journey!</h3>
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
                <TextField
                  required
                  id="outlined-optional"
                  label="Biggest Challenge (Optional)"
                  value={manifestoText}
                  variant="outlined"
                  defaultValue="What is the biggest challenge you face?"
                  onChange={(event) => 
                    setManifestoText(event.target.value)
                    }
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#bec9bc",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addAdditionalQuestion()}
                >
                ADD
                </Button>
              </section>
            </Grid>

            <Grid item xs={12} container spacing={2}>
              <section>
                <TextField
                  required
                  id="outlined-required"
                  label="100 Year Manifesto Life Opportunity"
                  value={manifestoText}
                  variant="outlined"
                  defaultValue="What do you hope the 100 Year Manifesto will help you in your life?"
                  onChange={(event) => 
                    setManifestoText(event.target.value)
                    }
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#bec9bc",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addAdditionalQuestion()}
                >
                ADD
                </Button>
              </section>
            </Grid>

            <Grid item xs={12} container spacing={2}>
              {additionalQuestions.map((question) => {
                if (question.id === additionalQuestionToEdit) {
                  return (
                    <Grid key={question.id} item xs={3}>
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
                        onClick={() => editAdditionalQuestion(question.id)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (question.id != additionalQuestionToEdit) {
                  return (
                    <Grid key={question.id} item xs={3}>
                      <TextField
                        disabled
                        id="outlined-required"
                        // label="Your Biggest Challenge"
                        value={question.manifesto_text}
                        variant="outlined"
                        onChange={(event) => setManifestoText(event.target.value)}
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
                        onClick={() => setAdditionalQuestionToEdit(question.id)}
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
                        onClick={() => history.push('/homepage')}
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