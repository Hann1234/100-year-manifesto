import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AdminPage_AccessCodes from '../AdminPage_AccessCodes/AdminPage_AccessCodes';
import AdminPage_ManageUsers from '../AdminPage_ManageUsers/AdminPage_ManageUsers';

function AdminPage() {
  const dispatch = useDispatch ();
  const user = useSelector((store) => store.user);
  const [showAccessCodes, setShowAccessCodes] = useState(false);
  const [showManageUsers, setShowManageUsers] = useState(false);
  
  // component is not listed in the progress bar
  dispatch({ type: "SET_NEXT_BUTTON", payload: -1 });

  useEffect(() => {

    dispatch({ type: 'ADMIN_FETCH_USERS' });
    dispatch({ type: 'ADMIN_FETCH_ACCESS_CODES' });
  }, []);

  return (
    <section className="container">
      {
        user.role !== "admin" && user.role !== "superadmin" ?
        // if a customer somehow gets to this page (shouldn't be possible), don't render
        <></> :
        // admin and superadmin view
        <>
          <h1>Admin Page</h1>
          {
            showAccessCodes ?
            <>
              <h2>Manage Access Codes <ExpandLessIcon onClick={() => setShowAccessCodes(false)}/></h2>
              <AdminPage_AccessCodes />
            </> :
            <>
              <h2>Manage Access Codes <ExpandMoreIcon onClick={() => setShowAccessCodes(true)}/></h2>
            </>
          }
          {
            showManageUsers ?
            <>
              <h2>Manage Users <ExpandLessIcon onClick={() => setShowManageUsers(false)}/></h2>
              <AdminPage_ManageUsers />
            </> :
            <>
              <h2>Manage Users <ExpandMoreIcon onClick={() => setShowManageUsers(true)}/></h2>
            </>
          }
        </>
      }
    </section>
  );
}

export default AdminPage;