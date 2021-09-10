import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

function AdminPage_ManageUsers() {
  const dispatch = useDispatch ();
  const user = useSelector((store) => store.user);
  const userList = useSelector((store) => store.userList.userList);
  const [selectedUser, setSelectedUser] = useState(user);
 
  // update user role in database
  const updateUserRole = () => {
      dispatch({
        type: 'ADMIN_UPDATE_USER_ROLE',
        payload: {
          id: selectedUser.id,
          role: selectedUser.role
        } 
    });
  } // end updateUserRole

  console.log("user", user);
  console.log("selectedUser", selectedUser);
  console.log("userList", userList);
  return (
    <section className="container">
      <section id={"user-section"}>
        <section id={"user-list-section"}>
          <h3>User List</h3>
          <Autocomplete
            id="select-user"
            options={userList}
            getOptionLabel={(option) => option.email}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="User List" variant="outlined" />}
            getOptionSelected={(option, value) => option.id === value.id}
            value={selectedUser}
            onChange={(event, newValue) => setSelectedUser(newValue)}
          />
        </section>
        {
          selectedUser === null ?
          <></> :
          <section id={"selected-user-section"}>
            <h3>Selected User</h3>
            <span style={{margin: "25px"}}><b style={{paddingRight: "10px"}}>Name:</b>{selectedUser.name}</span>
            <span style={{margin: "25px"}}><b style={{paddingRight: "10px"}}>Email:</b>{selectedUser.email}</span>
            {
              user.role === "superadmin" ?
              <span style={{margin: "25px"}}>
                <b style={{paddingRight: "10px"}}>Role:</b>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={selectedUser.role}
                  onChange={(event) => setSelectedUser({...selectedUser, role: event.target.value})}
                >
                  <MenuItem value={"customer"}>Customer</MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                  <MenuItem value={"superadmin"}>Superadmin</MenuItem>
                </Select>
                <Button onClick={updateUserRole}><SaveIcon /></Button>
              </span> :
              <span style={{margin: "15px"}}><b style={{paddingRight: "10px"}}>Role:</b> {selectedUser.role}</span>
            }
          </section>
        }
      </section>
    </section>
  );
}

export default AdminPage_ManageUsers;