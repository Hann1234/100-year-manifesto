import React from 'react';
import AdminEdits from '../AdminEdits/AdminEdits';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <p><AdminEdits page_id={9} html_id={"about_text"} default_value={"This about page is for anyone to read!"}/></p>
        <AdminEdits page_id={9} html_id={"test0"} default_value={"test text 0"}/>
        <AdminEdits page_id={9} html_id={"test1"} default_value={"test text 1"}/>
        <div>
          <AdminEdits page_id={9} html_id={"test2"} default_value={"test text 2"}/>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;