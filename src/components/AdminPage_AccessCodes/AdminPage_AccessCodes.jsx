import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function AdminPage_AccessCodes() {
  const accessCodes = useSelector((store) => store.accessCodes.accessCodes);
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const convertSqlTimestampToJs = (timestampIn) => {
    // Split timestamp into [ Y, M, D, h, m, s ]
    const t = timestampIn.split(/[- TZ.:]/);
  
    // Apply each element to the Date function
    const d = new Date(Date.UTC(t[0]*1, (t[1]*1)-1, t[2]*1, t[3]*1, t[4]*1, t[5]*1));

    return d.toString();
  } // end convertSqlTimestampToJs
  
  console.log("accessCodes", accessCodes);
  return (
    <section className="container">
      <section id={"access-code-section"}>
        <h2>Manage Access Codes</h2>
        <section id={"active-access-code-list-section"}>
          <h3>Active Access Codes List</h3>
          <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
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