import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckIcon from '@material-ui/icons/Check';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HistoryIcon from '@material-ui/icons/History';
import DateTimePicker from 'react-datetime-picker';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    }
  }));

function AdminEdits_Array( {page_names, page_id, html_id, default_value, current_selection, handleAddFunction, handleDeleteFunction} ) {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch ();
    const classes = useStyles();

    const adminEditFormReducer = useSelector((store) => store.adminEditFormReducer);

    const [date, setDate] = useState(new Date());
    const [editDate, setEditDate] = useState(false);
    const current_selection_sorted = current_selection.sort((a,b) => (a.manifesto_text > b.manifesto_text) ? 1 : ((b.manifesto_text > a.manifesto_text) ? -1 : 0));
    const [sortedOptions, setSortedOptions] = useState(default_value.sort());

    // getCurrentValue
    const getCurrentValue = () => {
        // make sure reducer isn't empty
        if (adminEditFormReducer.pageEdits.length !== 0) {
            // check if the current html_id is in the reducer
            if (adminEditFormReducer.pageEdits.find(row => row.html_id === html_id && row.html_type === 'array')) {
                // return object {value: html_content, id: id}
                return {
                    value: adminEditFormReducer.pageEdits.find(row => row.html_id === html_id).html_content,
                    id: adminEditFormReducer.pageEdits.find(row => row.html_id === html_id).id
                };
            }
        }
        // html_id isn't in reducer; use default
        return {value: default_value, id: -1};
    }; // end getCurrentValue

    // getValueOnDate
    const getValueOnDate = () => {
        // make sure reducer isn't empty
        if (adminEditFormReducer.pageEditsOnDate.length !== 0) {
            // check if the current html_id is in the reducer
            if (adminEditFormReducer.pageEditsOnDate.find(row => row.html_id === html_id && row.html_type === 'array')) {
                // return object {value: html_content, id: id}
                return {
                    value: adminEditFormReducer.pageEditsOnDate.find(row => row.html_id === html_id).html_content,
                    id: adminEditFormReducer.pageEditsOnDate.find(row => row.html_id === html_id).id
                };
            }
        }
        // html_id isn't in reducer; use default
        return {value: default_value, id: -1};
    }; // end getValueOnDate
    
    // if editDate is true, use values in pageEditsOnDate reducer; else, use pageEdits reducer
    // initial value is an object, {value: , id: }. id = -1 if we're using the default value instead of a database value
    const initialValue = editDate ? getValueOnDate() : getCurrentValue();
    
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(initialValue.value);
    const [confirmDelete, setConfirmDelete] = useState(false);


    // once adminEdiForm reducer is populated, update value useState
    useEffect(() => {
        setValue(initialValue.value);
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
                    page_name: page_names[page_id], // get page name from page_names constant using page_id 
                    html_id: html_id,
                    html_type: 'array',
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

    // delete change from the database
    const deleteChangeFromDb = () => {
        if (initialValue.id >= 0 && page_id) { // make sure id & page_id are defined before deleting
            dispatch({
                type: 'DELETE_PAGE_EDIT',
                payload: {
                    id: initialValue.id,
                    page_id: page_id,
                    html_id: html_id,
                    edit_date: toIsoString(date)
                } 
            });
        }
    } // end deleteChangeFromDb

    console.log("adminEditFormReducer", adminEditFormReducer);
    return (
        <>{
            user.role !== "admin" ?
            // customer case
            <>
            <Paper component="ul" className={classes.root}>
                {
                    current_selection_sorted.length > 0 ?
                    // chips from the relevant reducer
                    current_selection_sorted.map((data, index) => {
                            return (
                                <li key={index}>
                                <Chip
                                label={data.manifesto_text}
                                className={classes.chip}
                                clickable
                                onClick={() => handleDeleteFunction(data.id)}
                                color="secondary"
                                />
                                </li>
                            )
                        }) :
                    <></>
                }
                {
                    // other chips
                    sortedOptions
                        .filter(word => current_selection_sorted.filter(choice => choice.manifesto_text === word).length <= 0)
                        .map((data, index) => {
                            return (
                                <li key={index}>
                                <Chip
                                label={data}
                                className={classes.chip}
                                clickable
                                onClick={() => handleAddFunction(data)}
                                color="primary"
                                />
                                </li>
                            )
                        })
                }
            </Paper>
            </> :
            // admin case
            <>{
                edit ?
                // edit mode
                <>
                    
                    <CancelOutlinedIcon onClick={() => {setEdit(false); setEditDate(false); setValue(initialValue.value);}}/>
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
                            {
                                initialValue.id >= 0 ?
                                    confirmDelete ?
                                    <>
                                        <br/>
                                        Are you sure you want to delete this value from the database?
                                        <CancelOutlinedIcon onClick={() => setConfirmDelete(false)}/>
                                        <CheckIcon onClick={() => {deleteChangeFromDb(); setConfirmDelete(false);}}/>
                                    </> :
                                    <><DeleteIcon onClick={() => setConfirmDelete(true)}/></> :
                                    <></>
                            }
                        </> :
                        <></>
                    }
                    <Paper component="ul" className={classes.root}>
                        <Chip
                            label={<AddCircleOutlineIcon />}
                            className={classes.chip}
                            color="primary"
                        ></Chip>
                        {
                            // other chips
                            sortedOptions
                                .map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <Chip
                                            label={<>{data}<DeleteIcon /></>}
                                            className={classes.chip}
                                            color="primary"
                                            />
                                        </li>
                                    )
                                })
                        }
                    </Paper>
                </> :
                // display mode (edit is false)
                <>
                    <EditIcon onClick={() => setEdit(true)}/>
                    <Paper component="ul" className={classes.root}>
                        {
                            current_selection_sorted.length > 0 ?
                            // chips in user the relevant reducer
                            current_selection_sorted.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <Chip
                                            label={data.manifesto_text}
                                            className={classes.chip}
                                            clickable
                                            onClick={() => handleDeleteFunction(data.id)}
                                            color="secondary"
                                            />
                                        </li>
                                    )
                                }) :
                            <></>
                        }
                        {
                            // other chips
                            sortedOptions
                                .filter(word => current_selection_sorted.filter(choice => choice.manifesto_text === word).length <= 0)
                                .map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <Chip
                                            label={data}
                                            className={classes.chip}
                                            clickable
                                            onClick={() => handleAddFunction(data)}
                                            color="primary"
                                            />
                                        </li>
                                    )
                                })
                        }
                    </Paper>
                </>
            }</>
        }</>
    );
}

export default AdminEdits_Array;