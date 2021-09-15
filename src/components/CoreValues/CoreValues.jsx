import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import AdminEdits from "../AdminEdits/AdminEdits";
import Fade from "@material-ui/core/Fade";

import "./CoreValues.css";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import chips from "./ChipsData";

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
  paper: {
    height: "100vh",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper2: {
    height: "28vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper3: {
    height: "28vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  paper4: {
    height: "60vh",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "wrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
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
}));

function CoreValues() {
  const coreValues = useSelector((store) => store.coreValuesReducer.coreValues);

  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [coreValueToEdit, setCoreValueToEdit] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const page_id = 4;

  useEffect(() => {
    dispatch({
      type: "FETCH_CORE_VALUES",
    });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });

    setManifestoText("");
    setEditManifestoText("");
    setCoreValueToEdit(0);
  }, []); // when value inside square bracket is updated, useEffect is rerun

  const addCoreValueChip = (coreValue) => {
    dispatch({
      type: "ADD_CORE_VALUE",
      payload: {
        manifestoText: coreValue,
      },
    });
  };

  const addCoreValue = () => {
    if (manifestoText === "") {
    } else {
      dispatch({
        type: "ADD_CORE_VALUE",
        payload: {
          manifestoText: manifestoText,
        },
      });

      setManifestoText("");
    }
  };

  const editCoreValue = (id) => {
    dispatch({
      type: "UPDATE_CORE_VALUE",
      payload: {
        id: id,
        manifestoText: editManifestoText,
      },
    });
  };

  const deleteCoreValue = (id) => {
    dispatch({
      type: "DELETE_CORE_VALUE",
      payload: id,
    });
  };

  //Need handleSubmit
  const handleAddCoreValue = (value) => {
    event.preventDefault();

    // setManifestoText(value);

    addCoreValueChip(value);
  };

  const handleDeleteCoreValue = (id) => {
    event.preventDefault();

    deleteCoreValue(id);
  };

  return (
    <section>
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
          <Grid container item xs={8} className="scrollableDiv">
            <Grid item align="center" xs={12}>
              <h1>
                <AdminEdits
                  page_id={page_id}
                  html_id={"header"}
                  default_value={`Core Values`}
                />
              </h1>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"above_vid"}
                  default_value={`
                    You can’t argue with your core values. They just are. What are yours?
                  `}
                />
              </h3>
            </Grid>
            <Grid container spacing={1}>
              <Grid item align="center" xs={6}>
                <AdminEdits
                  page_id={page_id}
                  html_type={"video"}
                  html_id={"video"}
                  default_value={
                    "https://player.vimeo.com/video/599578721?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=a2b5bd36bf"
                  }
                />
              </Grid>
              <Grid align="center" item xs={6}>
                <p>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"right_of_vid1"}
                    default_value={`
                        Most companies have identified a set of core values.
                        Oftentimes they post them on their walls as a reminder
                        for their employees, their customers, & everyone they encounter.
                        `}
                  />
                </p>
                <p>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"right_of_vid2"}
                    default_value={`
                        If it makes sense for a business, it definitely makes sense
                        for an individual to have a personal set of core values.
                        Uncompromising, non-negotiables.
                        `}
                  />
                </p>
                <p>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"right_of_vid3"}
                    default_value={`
                        Our values reveal themselves to us.
                        `}
                  />
                </p>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <center>
                <h4>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"bottom1"}
                    default_value={`
                        What five core values have revealed themselves to you in the course of your life?
                        Pick 4-5-6 core values. Ones that have revealed themselves to you in your life.
                        The challenge here is this: there may be many core values that resonate with you.
                        For your 100 Year Manifesto, which are the ones that are in your heart of hearts. What are those core values?
                      `}
                  />
                </h4>
                {/* What is the "For Good" section renamed as? <button className="nextButton" onClick={() => history.push('/forgood')}>NEXT</button> */}
              </center>
              <Grid item xs={12} container spacing={2}>
                <section>
                  <CssTextField
                    required
                    id="outlined-required"
                    label="Add Core Value"
                    value={manifestoText}
                    variant="outlined"
                    onChange={(event) => setManifestoText(event.target.value)}
                  />
                  {coreValues.length >= 6 ? (
                    <Button
                      disabled
                      type="submit"
                      className={classes.button}
                      variant="contained"
                      onClick={() => addCoreValue()}
                    >
                      ADD
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className={classes.button}
                      variant="contained"
                      onClick={() => addCoreValue()}
                    >
                      ADD
                    </Button>
                  )}
                </section>
              </Grid>
              <br />
              <Grid item xs={12} container spacing={2}>
                {coreValues.map((value) => {
                  return (
                    <Grid key={value.id} item xs={3}>
                      <CssTextField
                        disabled
                        id="outlined-required"
                        label="Your Core Value"
                        value={value.manifesto_text}
                        variant="outlined"
                        onChange={(event) =>
                          setManifestoText(event.target.value)
                        }
                      />
                      <br />

                      <Button
                        type="submit"
                        className={classes.buttonRemove}
                        variant="contained"
                        onClick={() => deleteCoreValue(value.id)}
                      >
                        Remove
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid>
                <Box
                  component="span"
                  m={1} //margin
                  className={`${classes.bottomBox} ${classes.box}`}
                >
                  <BackButton />
                  <NextButton />
                </Box>
              </Grid>
              <Paper component="ul" className={classes.root}>
                <AdminEdits
                  page_id={page_id}
                  html_id={"chipsArray"}
                  html_type={"array"}
                  default_value={chips}
                  current_selection={coreValues}
                  max_selected={6}
                  handleAddFunction={addCoreValueChip}
                  handleDeleteFunction={deleteCoreValue}
                />
              </Paper>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </section>
  );
}

export default CoreValues;

// if chip is in the database then we will return the chip map will appear green, appear before other chips, 2nd handle click to delete
// if data.label === for of loop of coreValues.manifesto_text
