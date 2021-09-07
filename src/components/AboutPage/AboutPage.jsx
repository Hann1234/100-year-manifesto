import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminEdits from '../AdminEdits/AdminEdits';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'
function AboutPage() {
  const dispatch = useDispatch ();
  const page_id = 9;
  
  // component is not listed in the progress bar
  dispatch({ type: "SET_NEXT_BUTTON", payload: -1 });

  useEffect(() => {
      dispatch({ type: 'FETCH_USER' });
      dispatch({ type: 'FETCH_PAGE_EDITS', payload: {page_id: page_id} });
  }, []);

  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <p><AdminEdits page_id={page_id} html_id={"about_text"} default_value={"This about page is for anyone to read!"}/></p>
        <AdminEdits page_id={page_id} html_id={"test0"} default_value={"test text 0"}/>
        <AdminEdits page_id={page_id} html_id={"test1"} default_value={"test text 1"}/>
        <div>
          <AdminEdits page_id={page_id} html_id={"test2"} default_value={"test text 2"}/>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;