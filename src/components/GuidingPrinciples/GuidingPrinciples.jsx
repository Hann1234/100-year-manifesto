import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//styling
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./GuidingPrinciples.css";
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
}));

function GuidingPrinciples(props) {
  const guidingPrinciples = useSelector(
    (store) => store.guidingPrinciplesReducer.guidingPrinciples
  );

  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [guidingPrincipleToEdit, setGuidingPrincipleToEdit] = useState(0);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_GUIDING_PRINCIPLES",
    });

    //more reset state to useEffect when page is reloaded - test to make sure it works as intended.
    setManifestoText("");
    setEditManifestoText("");
    setGuidingPrincipleToEdit(0);
  }, []);

  const addGuidingPrinciple = () => {
    dispatch({
      type: "ADD_GUIDING_PRINCIPLE",
      payload: {
        manifestoText: manifestoText,
      },
    });

    // setManifestoText(''); - Moved to useEffect
  };

  const editGuidingPrinciple = (id) => {
    dispatch({
      type: "UPDATE_GUIDING_PRINCIPLE",
      payload: {
        id: id,
        manifestoText: editManifestoText,
      },
    });

    // setEditManifestoText(''); - Moved to useEffect
    // setGuidedPrincipleToEdit(0);
  };

  const deleteGuidingPrinciple = (id) => {
    dispatch({
      type: "DELETE_GUIDING_PRINCIPLE",
      payload: id,
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
              <h1>Guiding Principles</h1>
            </center>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="videoWrapper">
                  <iframe
                    width="512"
                    height="288"
                    src="https://player.vimeo.com/video/599579500?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=5c7636e390"
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo2">
                  <p>
                    Living your 100 Year Manifesto requires having Guiding
                    Principles.
                  </p>
                  <p>
                    Meaningful quotes, poetry, song lyrics, or Scriptures that
                    guide your life.
                  </p>
                  <p>What are yours?</p>
                  <p>
                    Different than the Words to Live By, this section is a place
                    for guiding principles, meaningful Scriptures, or passages
                    from your favorite books that significantly guide your life.
                  </p>
                  <p>
                    This framework might include quotes from famous people,
                    like:
                  </p>
                  <p>
                    “Do all the good you can. By all the means you can. In all
                    the ways you can. In all the places you can. At all the
                    times you can. To all the people you can. As long as ever
                    you can.” - John Wesley, Theologian
                  </p>
                </section>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <center>
                <section className="BottomText">
                  <p>
                    They might include quotes like: “You can never go wrong
                    doing the right thing.”
                  </p>
                  <p>
                    They might also include a handful of Scriptures, such as:
                    “To whom much is given, much is demanded.” Luke 12:48
                  </p>
                  <p>For me, I put 10 scriptures that really touch my soul.</p>
                  <p>
                    If you’re not into scriptures, there are quotes. Power
                    phrases. Things your parents said. Things you say. Passages
                    from books.
                  </p>
                </section>
              </center>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <section>
                <TextField
                  required
                  id="outlined-required"
                  label="Add Guiding Principle"
                  value={manifestoText}
                  variant="outlined"
                  onChange={(event) => setManifestoText(event.target.value)}
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#bec9bc",
                    color: "#132411",
                  }}
                  variant="contained"
                  onClick={() => addGuidingPrinciple()}
                >
                  ADD
                </Button>
              </section>
            </Grid>

            <br />

            <Grid item xs={12} container spacing={2}>
              {guidingPrinciples.map((principle) => {
                if (principle.id === guidingPrincipleToEdit) {
                  return (
                    <Grid key={principle.id} item xs={3}>
                      <TextField
                        id="outlined-required"
                        placeholder={guidingPrinciples.manifesto_text}
                        variant="outlined"
                        onChange={(event) =>
                          setEditGuidingPrincipleText(event.target.value)
                        }
                      />
                      <Button
                        id={principle.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => editGuidingPrinciple(principle.id)}
                      >
                        Save
                      </Button>
                    </Grid>
                  );
                }
                if (principle.id != guidingPrincipleToEdit) {
                  return (
                    <Grid key={principle.id} item xs={3}>
                      <TextField
                        disabled
                        id="outlined-required"
                        label="Your Guiding Principles"
                        value={principle.manifesto_text}
                        variant="outlined"
                        onChange={(event) =>
                          setManifestoText(event.target.value)
                        }
                      />
                      <Button
                        id={principle.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
                        variant="contained"
                        onClick={() => setGuidingPrincipleToEdit(principle.id)}
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
                        onClick={() => deleteGuidingPrinciple(principle.id)}
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

export default GuidingPrinciples;
