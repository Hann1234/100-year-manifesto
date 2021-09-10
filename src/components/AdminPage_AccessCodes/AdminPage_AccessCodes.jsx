import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DateTimePicker from 'react-datetime-picker';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function AdminPage_AccessCodes() {
  const dispatch = useDispatch ();
  const classes = useStyles();
  const accessCodes = useSelector((store) => store.accessCodes.accessCodes);
  const [date, setDate] = useState(new Date());
  const [newCode, setNewCode] = useState("");
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  // function to format sql timestamp into a displayable
  const convertSqlTimestampToJs = (timestampIn) => {
    // Split timestamp into [ Y, M, D, h, m, s ]
    const t = timestampIn.split(/[- TZ.:]/);
  
    // Apply each element to the Date function
    const d = new Date(Date.UTC(t[0]*1, (t[1]*1)-1, t[2]*1, t[3]*1, t[4]*1, t[5]*1));

    return d.toString();
  } // end convertSqlTimestampToJs

  // function to format date into a string the database will accept
  function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
  
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
  } // end toIsoString

  // save access code to the database
  const saveCodeToDb = () => {
    if (newCode !== '') {
      dispatch({
        type: 'ADMIN_ADD_ACCESS_CODE',
        payload: {
          access_code: newCode,
          expiration_date: toIsoString(date)
        } 
    });
    }
} // end saveChangesToDb
  
  console.log("accessCodes", accessCodes);
  return (
    <section className="container">
      <section id={"access-code-section"}>
        <section id={"active-access-code-list-section"}>
          <Button onClick={saveCodeToDb}>Save to DB<SaveIcon /></Button>
          <div style={{position: "relative", margin: "10px"}}>
            <span style={{paddingRight: "10px"}}>New access code:</span>
            <TextField
              style={{position: "absolute", bottom: "0px"}}
              label="New access code"
              value={newCode}
              onChange={() => setNewCode(event.target.value)}
            />
          </div>
          <div style={{position: "relative", margin: "10px"}}>
            <span style={{paddingRight: "10px"}}>Expiration Date:</span>
            <DateTimePicker
              label="Expiration date"
              value={date}
              onChange={setDate}
            />
          </div>
          <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Active Access Codes List
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {accessCodes.map((element, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        <LockOpenIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={element.code}
                      secondary={convertSqlTimestampToJs(element.expiration_date)}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
            </List>
          </div>
        </Grid>
        </section>
      </section>
    </section>
  );
}

export default AdminPage_AccessCodes;