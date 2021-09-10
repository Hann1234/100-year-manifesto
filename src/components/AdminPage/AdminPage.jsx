import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function AdminPage() {
  const dispatch = useDispatch ();
  const user = useSelector((store) => store.user);
  const userList = useSelector((store) => store.userList.userList);
  const [selectedUser, setSelectedUser] = useState(user);
  
  // component is not listed in the progress bar
  dispatch({ type: "SET_NEXT_BUTTON", payload: -1 });

  useEffect(() => {
      dispatch({ type: 'ADMIN_FETCH_USERS' });
  }, []);

  console.log("user", user);
  console.log("selectedUser", selectedUser);
  console.log("userList", userList);
  return (
    <section className="container">
      {
        user.role !== "admin" && user.role !== "superadmin" ?
        // if a customer somehow gets to this page (shouldn't be possible), don't render
        <></> :
        // admin and superadmin view
        <>
          <div>
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
          </div>
          <div>
            <TextField
                id="selectedUser"
                label="Selected User"
                value={selectedUser.name}
                onChange={() => setSelectedUser({...selectedUser, name: event.target.value})}
            />
          </div>
        </>
      }
    </section>
  );
}

export default AdminPage;