import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//styling
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./GuidingPrinciples.css";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import CompleteButton from "../CompleteButton/CompleteButton";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import AdminEdits from "../AdminEdits/AdminEdits";

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

function GuidingPrinciples() {
  const guidingPrinciples = useSelector(
    (store) => store.guidingPrinciplesReducer.guidingPrinciples
  );
  const [manifestoText, setManifestoText] = useState("");
  const [source, setSource] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [editSourceText, setEditSourceText] = useState('');
  const [itemToEdit, setItemToEdit] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const page_id = 7;

  useEffect(() => {
    dispatch({
      type: "FETCH_GUIDING_PRINCIPLES",
    });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });
  }, []);

  const addGuidingPrinciple = () => {
    dispatch({
      type: "ADD_GUIDING_PRINCIPLE",
      payload: {
        manifestoText: manifestoText,
        source: source,
      },
    });
    setSource("");
    setManifestoText("");
  };
  const startEdit = (itemToEdit) => {
    setEditManifestoText(itemToEdit.manifesto_text);
    setEditSourceText(itemToEdit.source);
    setItemToEdit(itemToEdit.id);
  };

  const editGuidingPrinciple = (id) => {
    dispatch({
      type: "UPDATE_GUIDING_PRINCIPLE",
      payload: {
        id: id,
        manifestoText: editManifestoText, source: editSourceText
      },
    });

    setEditManifestoText("");
    setEditSourceText('');
    setItemToEdit(0);
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
            <AutoScale>
              <Manifesto />
            </AutoScale>
          </Grid>
          <Grid item xs={8}>
            <center>
              <h1>
                <AdminEdits
                  page_id={page_id}
                  html_id={"header"}
                  default_value={"Guiding Principles"}
                />
              </h1>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"above_vid1"}
                  default_value={`
                    Living your 100 Year Manifesto requires having Guiding
                    Principles. Meaningful quotes, poetry, song lyrics, or
                    Scriptures that guide your life. What are yours?
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
                    "https://player.vimeo.com/video/599579500?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=5c7636e390"
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo2">
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid1"}
                      default_value={`
                        Different than the Words to Live By, this section is a place
                        for guiding principles, meaningful Scriptures, or passages
                        from your favorite books that significantly guide your life.
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid2"}
                      default_value={`
                        This framework might include quotes from famous people, like:
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid3"}
                      default_value={`
                        “Do all the good you can. By all the means you can. In all
                        the ways you can. In all the places you can. At all the
                        times you can. To all the people you can. As long as ever
                        you can.” - John Wesley, Theologian
                      `}
                    />
                  </p>
                </section>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <center>
                <section className="BottomText">
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom1"}
                      default_value={`
                        They might include quotes like: “You can never go wrong
                        doing the right thing.”
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom2"}
                      default_value={`
                        They might also include a handful of Scriptures, such as:
                        “To whom much is given, much is demanded.” Luke 12:48
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"bottom3"}
                      default_value={`
                        There are quotes. Power phrases. Things your parents said. Things you say. Passages from books. Scriptures.
                      `}
                    />
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
                  style={{ width: "100%" }}
                  value={manifestoText}
                  variant="outlined"
                  onChange={(event) => setManifestoText(event.target.value)}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Source"
                  style={{ width: "50%" }}
                  value={source}
                  variant="outlined"
                  onChange={(event) => setSource(event.target.value)}
                />
                <Button
                  type="submit"
                  style={{
                    height: "56px",
                    backgroundColor: "#1c4bd9",
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
                if (principle.id === itemToEdit) {
                  return (
                    <Grid key={principle.id} item xs={6}>
                      <TextField
                        id="outlined-required"
                        style={{ width: "100%" }}
                        placeholder={principle.manifesto_text}
                        variant="outlined"
                        onChange={(event) =>
                          setEditManifestoText(event.target.value)
                        }
                      />
                      <TextField
                        id="outlined-required"
                        style={{ width: "50%" }}
                        placeholder={principle.source}
                        onChange={(event) => setEditSourceText(event.target.value)}
                        variant="outlined"
                      />
                      <Button
                        id={principle.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#7bd91c",
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
                if (principle.id != itemToEdit) {
                  return (
                    <Grid key={principle.id} item xs={6}>
                      <TextField
                        disabled
                        id="outlined-required"
                        style={{ width: "100%" }}
                        value={principle.manifesto_text}
                        variant="outlined"
                      />
                      <TextField
                        disabled
                        id="outlined-required"
                        style={{ width: "50%" }}
                        value={principle.source}
                        variant="outlined"
                      />
                      <Button
                        id={principle.id}
                        type="submit"
                        style={{
                          height: "28px",
                          backgroundColor: "#1c4bd9",
                          color: "#fff",
                        }}
                        variant="contained"
                        onClick={() => startEdit (principle)}
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
