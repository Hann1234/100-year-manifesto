import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AdminPage() {
  const dispatch = useDispatch ();
  const user = useSelector((store) => store.user);
  const userList = useSelector((store) => store.userList);
  
  // component is not listed in the progress bar
  dispatch({ type: "SET_NEXT_BUTTON", payload: -1 });

  useEffect(() => {
      dispatch({ type: 'ADMIN_FETCH_USERS' });
  }, []);

  console.log("userList", userList);
  return (
    <section className="container">
      {
        user.role !== "admin" && user.role !== "superadmin" ?
        // if a customer somehow gets to this page (shouldn't be possible), don't render
        <></> :
        // admin and superadmin view
        <></>
      }
    </section>
  );
}

export default AdminPage;