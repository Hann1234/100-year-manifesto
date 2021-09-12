import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./Mantras.css";
import CompleteButton from "../CompleteButton/CompleteButton";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import AdminEdits from "../AdminEdits/AdminEdits";

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
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
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
}));

function Mantras(props) {
  const mantras = useSelector((store) => store.mantrasReducer.mantras);
  const [manifestoText, setManifestoText] = useState("");
  const [editManifestoText, setEditManifestoText] = useState("");
  const [mantraToEdit, setMantraToEdit] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const page_id = 3;

  useEffect(() => {
    dispatch({ type: "FETCH_MANTRAS" });
    dispatch({ type: "FETCH_PAGE_EDITS", payload: { page_id: page_id } });
  }, []);

  const addMantra = () => {
    if (manifestoText === "") {
    } else {
      dispatch({
        type: "ADD_MANTRA",
        payload: { manifestoText: manifestoText },
      });
      setManifestoText("");
    }
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
              <div className="manifestoPadding">
                <AutoScale>
                    <Manifesto />
                </AutoScale>
              </div>
          </Grid>
          <Grid item xs={8} className="scrollableDiv">
            <center>
              <h1>
                <AdminEdits
                  page_id={page_id}
                  html_id={"header"}
                  default_value={`Words To Live By`}
                />
              </h1>
              <h3>
                <AdminEdits
                  page_id={page_id}
                  html_id={"right_of_vid1"}
                  default_value={`
                    Having a framework for decisions is critical to living a
                    life on purpose. Guiding principles set forth through “Words to Live By.”
                    When life brings uncertainty through events, circumstances, & difficult
                    moments having a compass to guide your decisions is necessary.
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
                    "https://player.vimeo.com/video/599580455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=f2cf5fad43"
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <section className="rightOfVideo">
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid2"}
                      default_value={`
                        These are one, two, or three word sentences or phrases.
                        Simple concepts that really resonate to your core.
                      `}
                    />
                  </p>
                  <p>
                    <AdminEdits
                      page_id={page_id}
                      html_id={"right_of_vid3"}
                      default_value={`
                        This framework might include quotes from some of the lessons
                        you learned growing up, simple mantras you’ve picked up along the way,
                        or phrases you repeat to yourself throughout the day.
                      `}
                    />
                  </p>
                </section>
              </Grid>
            </Grid>
            <br />
            <Grid item xs={12}>
              <section className="BottomText">
                <h3>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"bottom1"}
                    default_value={`Here are some of our favorites:`}
                  />
                </h3>
                <Grid item xs={12} container spacing={2}>
                  <Grid item xs={3}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom2"}
                        default_value={`Own your ugly `}
                      />
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom3"}
                        default_value={`Zip-a-dee-do-dah`}
                      />
                    </p>
                  </Grid>

                  <Grid item xs={3}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom4"}
                        default_value={`Make it a Masterpiece`}
                      />
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom5"}
                        default_value={`Live. Laugh. Love.`}
                      />
                    </p>
                  </Grid>
                  <Grid item xs={4}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom6"}
                        default_value={`Embrace the uncertainty`}
                      />
                    </p>
                  </Grid>
                  <Grid item xs={4}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom7"}
                        default_value={`Love unconditionally`}
                      />
                    </p>
                  </Grid>
                  <Grid item xs={4}>
                    <p>
                      <AdminEdits
                        page_id={page_id}
                        html_id={"bottom8"}
                        default_value={`Simplify. Simplify.`}
                      />
                    </p>
                  </Grid>
                </Grid>

                <h3>
                  <AdminEdits
                    page_id={page_id}
                    html_id={"instruction1"}
                    default_value={`List 5-10 words & phrases you live by:`}
                  />
                </h3>
              </section>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <section>
                <CssTextField
                  required
                  id="outlined-required"
                  label="Add Word to Live By"
                  value={manifestoText}
                  variant="outlined"
                  onChange={(evt) => setManifestoText(evt.target.value)}
                />
                {mantras.length >= 10 ? (
                  <Button
                    disabled
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    onClick={() => addMantra()}
                  >
                    ADD
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    onClick={() => addMantra()}
                  >
                    ADD
                  </Button>
                )}
              </section>
            </Grid>
            <br />
            <Grid item xs={12} container spacing={2}>
              {mantras.map((mantra) => {
                if (mantra.id === mantraToEdit) {
                  return (
                    <Grid key={mantra.id} item xs={3}>
                      <CssTextField
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
                        className={classes.buttonSave}
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
                      <CssTextField
                        disabled
                        id="outlined-required"
                        label="Your Word to Live By"
                        value={mantra.manifesto_text}
                        variant="outlined"
                        onChange={(evt) => setManifestoText(evt.target.value)}
                      />
                      <br />
                      <Button
                        id={mantra.id}
                        type="submit"
                        className={classes.buttonEdit}
                        variant="contained"
                        onClick={() => setMantraToEdit(mantra.id)}
                      >
                        Edit
                      </Button>
                      <span> </span>
                      <Button
                        type="submit"
                        className={classes.buttonRemove}
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
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Mantras;
