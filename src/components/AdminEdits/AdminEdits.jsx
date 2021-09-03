import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HistoryIcon from '@material-ui/icons/History';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker';

// list of page_ids and corresponding page_names
const pageNames = {
    0: 'home',
    1: 'intro',
    2: 'mission_statement',
    3: 'mantras',
    4: 'core_values',
    5: 'for_good',
    6: 'life_goals',
    7: 'guiding_principles',
    8: 'next_steps',
    9: 'about'
}

// material-ui styles
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function AdminEdits( {page_id, html_id, html_type, default_value}) {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch ();
    const classes = useStyles();

    const adminEditFormReducer = useSelector((store) => store.adminEditFormReducer);

    const [date, setDate] = useState(new Date());
    const [editDate, setEditDate] = useState(false);

    // if current html_id is in the pageEdits reducer, use value from db; else, use default
    const initialValue = editDate ?
        (adminEditFormReducer.pageEditsOnDate.length !== 0 ? 
        adminEditFormReducer.pageEditsOnDate.find(row => row.html_id === html_id) ?
            adminEditFormReducer.pageEditsOnDate.find(row => row.html_id === html_id).html_content :
            default_value : default_value) :
        (adminEditFormReducer.pageEdits.length !== 0 ? 
        adminEditFormReducer.pageEdits.find(row => row.html_id === html_id) ?
            adminEditFormReducer.pageEdits.find(row => row.html_id === html_id).html_content :
            default_value : default_value);
    
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(initialValue);

    // once adminEdiForm reducer is populated, update value useState
    useEffect(() => {
        setValue(initialValue);
    }, [adminEditFormReducer, editDate]);


    const handleChange = (event) => {
        setValue(event.target.value);
    }; // end handleChange

    // save change to the database
    const saveChangesToDb = () => {
        if (page_id && html_id) { // make sure page_id & html_id are defined before posting
            dispatch({
                type: 'ADD_PAGE_EDIT',
                payload: {
                    page_id: page_id,
                    page_name: pageNames[page_id], // get page name from pageNames constant using page_id 
                    html_id: html_id,
                    html_type: html_type ? html_type : 'text',  // if html_type isn't passed in, default to 'text'
                    html_content: value
                } 
            });
        }
    } // end saveChangesToDb

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

    // get database settings
    const pullEditByDate = () => {
        console.log("date", date);
        dispatch({
            type: 'FETCH_EDIT_ON_DATE',
            payload: {
                page_id: page_id,
                html_id: html_id,
                edit_date: toIsoString(date)
            } 
        });
    } // end pullEditByDate
    console.log("adminEditFormReducer", adminEditFormReducer);
    return (
        <>{
            user.role !== "admin" ?
            // user case
            <>{value}</> :
            // admin case
            <>{
                edit ?
                // edit mode
                <>
                    <TextField
                        label="Multiline"
                        multiline
                        value={value}
                        onChange={handleChange}
                    />
                    <CancelOutlinedIcon onClick={() => {setEdit(false); setEditDate(false); setValue(initialValue);}}/>
                    <SaveIcon onClick={() => {setEdit(false); saveChangesToDb()}}/>
                    <ScheduleIcon onClick={() => setEditDate(!editDate)}/>
                    {
                        editDate ?
                        <>
                            <HistoryIcon onClick={() => pullEditByDate()}/>
                            <DateTimePicker
                                onChange={setDate}
                                value={date}
                            />
                        </> :
                        <></>
                    }
                </> :
                // display mode (edit is false)
                <>
                    {value}
                    <EditIcon onClick={() => setEdit(true)}/>
                </>
            }</>
        }</>
    );
}

export default AdminEdits;