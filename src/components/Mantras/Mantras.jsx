import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3)
    },
    paper: {
      height: '100vh',
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "wrap",
      marginBottom: theme.spacing(1)
    },
    paper2: {
        height: '24vh',
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "wrap",
        marginBottom: theme.spacing(1)
      },
      paper3: {
        height: '24vh',
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "wrap",
        marginBottom: theme.spacing(1)
      },
    divider: {
      margin: theme.spacing(2, 0)
    }
  }));


function Mantras(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  const classes = useStyles();

  return (
    <section>
       
        <div>
         
          <Grid container spacing={3}>
            <Grid xs={4}>
              <Paper className={classes.paper}>this is where the manifesto goes I do not know if we thought about this but almost all of our pages are going to follw a vary spacific grid layout so it should be atop priority to get that layout figured out so we can all have it for our pages</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}><h1>Mantras</h1>
              <Grid item xs={6}>
              <Paper className={classes.paper2}>Imaging the video will go here</Paper>
              <Paper className={classes.paper3}>Imaging the video will go here</Paper>
              </Grid>
              <Grid item xs={5}>
              
              </Grid>
              </Paper>
              
            </Grid>
          </Grid>
        </div>
    </section>
  );
}
  
    



export default Mantras;