import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminEdits from '../AdminEdits/AdminEdits';

function AdminPage() {
  const dispatch = useDispatch ();
  const coreValues = useSelector((store) => store.coreValuesReducer.coreValues);
  const page_id = 9;
  
  // component is not listed in the progress bar
  dispatch({ type: "SET_NEXT_BUTTON", payload: -1 });

  useEffect(() => {
      dispatch({ type: 'FETCH_USER' });
      dispatch({ type: 'FETCH_PAGE_EDITS', payload: {page_id: page_id} });
  }, []);

  const deleteCoreValue = (id) => {
    dispatch({
        type: 'DELETE_CORE_VALUE', 
        payload: id
    });
  };

  const addCoreValue = (manifestoText) => {
    dispatch({
        type: 'ADD_CORE_VALUE', 
        payload: {
            manifestoText: manifestoText
        }});
  };

  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <p><AdminEdits page_id={page_id} html_id={"about_text"} default_value={"This about page is for anyone to read!"}/></p>
      </div>
    </div>
  );
}

export default AdminPage;