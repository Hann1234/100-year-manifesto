import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import "./ForGood.css";
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

function ForGood(props) {
  const ForGood = useSelector((store) => store.forGoodReducer.forGood);
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [forGoodToEdit, setForGoodToEdit] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  console.log('this should be alife goal', ForGood);

  useEffect(() => {
    dispatch({ type: "FETCH_FOR_GOODS" });
  }, []);

  const addForGood = () => {
    dispatch({ type: "ADD_FOR_GOOD", payload: { manifestoText: manifestoText } });
    setManifestoText("");
  };

  const editForGood = (id) => {
    dispatch({
      type: "UPDATE_FOR_GOOD",
      payload: { id: id, manifestoText: editManifestoText },
    });
    setEditManifestoText("");
    setForGoodToEdit(0);
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
            <center><h1>For Good</h1></center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src=""
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo2">
                  <p>
                  FOR GOOD
For a long time I heard the phrase,
by older & wiser folks. It puzzled me. I
never really understood it. And, I was too embarrassed to ask what it meant. The older & wiser I get the more the phrase resonates.
Living in a big city, I see a lot of people from all walks of life. Some of them are heading to sporting events & concerts, some are working at the restaurants & hotels, some are corporate suits, but it’s the ones on the corner asking for change – those are the ones I really think about.
While they may be homeless – they are also somebody’s brother – somebody’s sister – somebody’s father – somebodys daughter. They are real people. I’ve never heard a grade schooler answer the question “what do you want to be when you grow up?” with the answer “homeless, missing a few teeth, out of touch with those I love the most, begging for money, & wearing the same clothes I wore for the past week.”
One of the ladies in particular catches my attention. I’m not sure what it is about her, but she reminds me of my Mom. Yes, my Mom. One of my heroes. One of the people who loved me the most in life. And, I think to myself – had Mom been in a big city versus the small, rural community of Galesburg, Illinois – had she been in a big city when she was going through her dark days, would she too be on the corner – would she too be digging in the trash looking for a treasure – would she too be one of “those” people.
Somebody’s Brother is a cause I’m passionate about. It’s something greater
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
            <Grid item xs={12} >
              <section>
                <TextField
                  required
                  style = {{width: '48%'}}
                  id="outlined-required"
                  label="Add ForGood"
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
                  onClick={() => addForGood()}
                >
                  ADD
                </Button>
              </section>
            </Grid>

            <Grid item xs={12} container spacing={2}>
              {ForGood.map((ForGood) => {
                if (ForGood.id === forGoodToEdit) {
                  return (
                    <Grid key={ForGood.id} item xs={6}>
                      <TextField
                        id="outlined-required"
                        style = {{width: '100%'}}
                        placeholder={ForGood.manifesto_text}
                        variant="outlined"
                        onChange={(evt) =>
                          setEditManifestoText(evt.target.value)
                        }
                      />
                      <Button
                        id={ForGood.id}
                        style = {{width: 450}}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
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
                if (ForGood.id != forGoodToEdit) {
                  return (
                    <Grid key={ForGood.id} item xs={6}>
                      <TextField
                        disabled
                        id="outlined-required"
                        label="Your Life Goal"
                        style = {{width: '100%'}}
                        value={ForGood.manifesto_text}
                        variant="outlined"
                        onChange={(evt) => setManifestoText(evt.target.value)}
                      />
                      <Button
                        id={ForGood.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => setForGoodToEdit(ForGood.id)}
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
  <Button 
    variant="contained" 
    color="primary" 
    style={{ height: 40 }}
    onClick={() => history.push('/guidingprinciples')}
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

export default ForGood;