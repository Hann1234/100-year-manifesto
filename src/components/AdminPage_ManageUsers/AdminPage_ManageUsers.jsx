import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import AutoScale from "react-auto-scale";
import Manifesto from "../Manifesto/Manifesto";
import Grid from "@material-ui/core/Grid";

function AdminPage_ManageUsers() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const userList = useSelector((store) => store.userList.userList);
  const additionalQuestions = useSelector(
    (store) => store.additionalQuestionsReducer.additionalQuestions
  );
  const [selectedUser, setSelectedUser] = useState(null);

  // update user role in database
  const updateUserRole = () => {
    dispatch({
      type: "ADMIN_UPDATE_USER_ROLE",
      payload: {
        id: selectedUser.id,
        role: selectedUser.role,
      },
    });
  }; // end updateUserRole

  const fetchUserManifesto = (id) => {
    dispatch({
      type: "FETCH_USER_MISSION",
      payload: { id: id },
    });
    dispatch({
      type: "FETCH_USER_MANTRAS",
      payload: { id: id },
    });
    dispatch({
      type: "FETCH_USER_FOR_GOODS",
      payload: { id: id },
    });
    dispatch({
      type: "FETCH_USER_GUIDING_PRINCIPLES",
      payload: { id: id },
    });
    dispatch({
      type: "FETCH_USER_CORE_VALUES",
      payload: { id: id },
    });
    dispatch({
      type: "FETCH_USER_LIFE_GOALS",
      payload: { id: id },
    });
    dispatch({
      type: "FETCH_USER_ADDITIONAL_QUESTIONS",
      payload: { id: id },
    });
  }; // end fetchUserManifesto

  const handleSelectNewUser = (newUser) => {
    setSelectedUser(newUser);
    if (newUser !== null) {
      fetchUserManifesto(newUser.id);
    }
  }; // end handleSelectNewUser

  return (
    <section className="container">
      <Grid container spacing={3} xs={12}>
        {selectedUser === null ? (
          <></>
        ) : (
          <Grid item xs={4}>
            <div className="manifestoPadding">
              <AutoScale>
                <Manifesto admin_page={true} user_name={selectedUser.name} />
              </AutoScale>
            </div>
          </Grid>
        )}
        <Grid container item xs={8} className="scrollableDiv">
          <section id={"user-section"}>
            <section id={"user-list-section"}>
              <h3>User List</h3>
              <Autocomplete
                id="select-user"
                options={userList}
                getOptionLabel={(option) => option.email}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="User List" variant="outlined" />
                )}
                getOptionSelected={(option, value) => option.id === value.id}
                value={selectedUser}
                onChange={(event, newValue) => handleSelectNewUser(newValue)}
              />
            </section>
            {selectedUser === null ? (
              <></>
            ) : (
              <section id={"selected-user-section"}>
                <h3>Selected User</h3>
                <span style={{ margin: "25px" }}>
                  <b style={{ paddingRight: "10px" }}>Name:</b>
                  {selectedUser.name}
                </span>
                <span style={{ margin: "25px" }}>
                  <b style={{ paddingRight: "10px" }}>Email:</b>
                  {selectedUser.email}
                </span>
                {user.role === "superadmin" && user.id !== selectedUser.id ? (
                  <span style={{ margin: "25px" }}>
                    <b style={{ paddingRight: "10px" }}>Role:</b>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={selectedUser.role}
                      onChange={(event) =>
                        setSelectedUser({
                          ...selectedUser,
                          role: event.target.value,
                        })
                      }
                    >
                      <MenuItem value={"customer"}>Customer</MenuItem>
                      <MenuItem value={"admin"}>Admin</MenuItem>
                      <MenuItem value={"superadmin"}>Superadmin</MenuItem>
                    </Select>
                    <Button onClick={updateUserRole}>
                      <SaveIcon />
                    </Button>
                  </span>
                ) : (
                  <span style={{ margin: "15px" }}>
                    <b style={{ paddingRight: "10px" }}>Role:</b>{" "}
                    {selectedUser.role}
                  </span>
                )}
                {additionalQuestions.length > 0 ? (
                  <>
                    <h3>Additional Questions</h3>
                    {additionalQuestions.map((question, index) => {
                      return (
                        <div key={index} style={{ marginBottom: "20px" }}>
                          <div>
                            <b>{question.question}</b>
                          </div>
                          <div>
                            <i>{question.manifesto_text}</i>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </section>
            )}
          </section>
        </Grid>
      </Grid>
    </section>
  );
}

export default AdminPage_ManageUsers;
