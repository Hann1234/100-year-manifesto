import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function AdminPage_ManageUsers() {
  const dispatch = useDispatch ();
  const user = useSelector((store) => store.user);
  const userList = useSelector((store) => store.userList.userList);
  const [selectedUser, setSelectedUser] = useState(user);
 
  console.log("user", user);
  console.log("selectedUser", selectedUser);
  console.log("userList", userList);
  return (
    <section className="container">
      <section id={"user-section"}>
        <h2>Manage Users</h2>
        <section id={"user-list-section"}>
          <h3>User List</h3>
          <Autocomplete
            id="combo-box-demo"
            options={userList}
            getOptionLabel={(option) => option.email}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="User List" variant="outlined" />}
            getOptionSelected={(option, value) => option.id === value.id}
            value={selectedUser}
            onChange={(event, newValue) => setSelectedUser(newValue)}
          />
        </section>
        <section id={"selected-user-section"}>
          <h3>Selected User</h3>
          <TextField
              id="selectedUserName"
              label="Selected User Name"
              value={selectedUser.name}
              onChange={() => setSelectedUser({...selectedUser, name: event.target.value})}
          />
          <TextField
              id="selectedUserEmail"
              label="Selected User Email"
              value={selectedUser.email}
              onChange={() => setSelectedUser({...selectedUser, email: event.target.value})}
          />
          {
            user.role === "superadmin" ?
            <TextField
                id="selectedUserRole"
                label="Selected User Role"
                value={selectedUser.role}
                onChange={() => setSelectedUser({...selectedUser, role: event.target.value})}
            /> :
            <span>Role: {selectedUser.role}</span>
          }
        </section>
      </section>
    </section>
  );
}

export default AdminPage_ManageUsers;