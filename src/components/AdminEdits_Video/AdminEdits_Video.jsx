import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import ScheduleIcon from "@material-ui/icons/Schedule";
import HistoryIcon from "@material-ui/icons/History";
import TextField from "@material-ui/core/TextField";
import DateTimePicker from "react-datetime-picker";

function AdminEdits_Video({ page_names, page_id, html_id, default_value }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const adminEditFormReducer = useSelector(
    (store) => store.adminEditFormReducer
  );

  const [date, setDate] = useState(new Date());
  const [editDate, setEditDate] = useState(false);

  // getCurrentValue
  const getCurrentValue = () => {
    // make sure reducer isn't empty
    if (adminEditFormReducer.pageEdits.length !== 0) {
      // check if the current html_id is in the reducer
      if (
        adminEditFormReducer.pageEdits.find(
          (row) => row.html_id === html_id && row.html_type === "video"
        )
      ) {
        // return object {value: html_content, id: id}
        return {
          value: adminEditFormReducer.pageEdits.find(
            (row) => row.html_id === html_id
          ).html_content,
          id: adminEditFormReducer.pageEdits.find(
            (row) => row.html_id === html_id
          ).id,
        };
      }
    }
    // html_id isn't in reducer; use default
    return { value: default_value, id: -1 };
  }; // end getCurrentValue

  // getValueOnDate
  const getValueOnDate = () => {
    // make sure reducer isn't empty
    if (adminEditFormReducer.pageEditsOnDate.length !== 0) {
      // check if the current html_id is in the reducer
      if (
        adminEditFormReducer.pageEditsOnDate.find(
          (row) => row.html_id === html_id && row.html_type === "video"
        )
      ) {
        // return object {value: html_content, id: id}
        return {
          value: adminEditFormReducer.pageEditsOnDate.find(
            (row) => row.html_id === html_id
          ).html_content,
          id: adminEditFormReducer.pageEditsOnDate.find(
            (row) => row.html_id === html_id
          ).id,
        };
      }
    }
    // html_id isn't in reducer; use default
    return { value: default_value, id: -1 };
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
    if (page_id >= 0 && html_id) {
      // make sure page_id & html_id are defined before posting
      dispatch({
        type: "ADD_PAGE_EDIT",
        payload: {
          page_id: page_id,
          page_name: page_names[page_id], // get page name from page_names constant using page_id
          html_id: html_id,
          html_type: "video",
          html_content: value,
        },
      });
    }
  }; // end saveChangesToDb

  // function to format date into a string the database will accept
  function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
      };

    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes()) +
      ":" +
      pad(date.getSeconds()) +
      dif +
      pad(tzo / 60) +
      ":" +
      pad(tzo % 60)
    );
  } // end toIsoString

  // get database settings
  const pullEditByDate = () => {
    dispatch({
      type: "FETCH_EDIT_ON_DATE",
      payload: {
        page_id: page_id,
        html_id: html_id,
        edit_date: toIsoString(date),
      },
    });
  }; // end pullEditByDate

  // delete change from the database
  const deleteChangeFromDb = () => {
    if (initialValue.id >= 0 && page_id >= 0) {
      // make sure id & page_id are defined before deleting
      dispatch({
        type: "DELETE_PAGE_EDIT",
        payload: {
          id: initialValue.id,
          page_id: page_id,
          html_id: html_id,
          edit_date: toIsoString(date),
        },
      });
    }
  }; // end deleteChangeFromDb

  return (
    <>
      {user.role !== "admin" && user.role !== "superadmin" ? (
        // customer case
        <div className="videoWrapper">
          <iframe width="512" height="288" src={value} />
        </div>
      ) : (
        // admin & superadmin case
        <>
          {edit ? (
            // edit mode
            <>
              <TextField
                label="Video URL"
                multiline
                value={value}
                onChange={handleChange}
              />
              <CancelOutlinedIcon
                onClick={() => {
                  setEdit(false);
                  setEditDate(false);
                  setValue(initialValue.value);
                }}
              />
              <SaveIcon
                onClick={() => {
                  setEdit(false);
                  saveChangesToDb();
                }}
              />
              <ScheduleIcon onClick={() => setEditDate(!editDate)} />
              {editDate ? (
                <>
                  <HistoryIcon onClick={() => pullEditByDate()} />
                  <DateTimePicker onChange={setDate} value={date} />
                  {initialValue.id >= 0 ? (
                    confirmDelete ? (
                      <>
                        <br />
                        Are you sure you want to delete this value?
                        <CancelOutlinedIcon
                          onClick={() => setConfirmDelete(false)}
                        />
                        <CheckIcon
                          onClick={() => {
                            deleteChangeFromDb();
                            setConfirmDelete(false);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <DeleteIcon onClick={() => setConfirmDelete(true)} />
                      </>
                    )
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            // display mode (edit is false)
            <>
              <EditIcon onClick={() => setEdit(true)} />
              <div className="videoWrapper">
                <iframe width="512" height="288" src={value} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default AdminEdits_Video;
