import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminPage_AccessCodes from '../AdminPage_AccessCodes/AdminPage_AccessCodes';
import AdminPage_ManageUsers from '../AdminPage_ManageUsers/AdminPage_ManageUsers';

function AdminPage() {
  const dispatch = useDispatch ();
  const user = useSelector((store) => store.user);
  
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
          <AdminPage_AccessCodes />
          <AdminPage_ManageUsers />
        </>
      }
    </section>
  );
}

export default AdminPage;