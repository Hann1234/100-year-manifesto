import { combineReducers } from 'redux';

// Stores pageEdits
const pageEdits = (state = [], action) => {
  switch (action.type) {
    case 'SET_PAGE_EDITS':
        return action.payload;
    default:
      return state;
  }
};

// Stores pageEditsOnDate
const pageEditsOnDate = (state = [], action) => {
    switch (action.type) {
      case 'SET_EDIT_ON_DATE':
          // return action.payload;
          console.log("action.payload",action.payload);
          if (action.payload.edit_data) {
            if (state.length !== 0 && state.findIndex(row => row.html_id === action.payload.edit_data.html_id && row.page_id === action.payload.edit_data.page_id) >= 0) {
              // if a row with matching html_id and page_id are already in the table, update it
              // filter out data from other pages
              return state.map(row => {
                if (row => row.html_id === action.payload.edit_data.html_id && row.page_id === action.payload.edit_data.page_id) {
                  return action.payload.edit_data;
                }
                return {...row};
              }).filter(row => row.page_id === action.payload.edit_data.page_id);
            } else {
              // No match found. Insert it and filter out data from other pages.
              return [...state, action.payload.edit_data].filter(row => row.page_id === action.payload.edit_data.page_id);
            }
          } else {
            // if database response was zero, remove that value from reducer
            return [...state].filter(row => { return row.html_id !== action.payload.html_id || row.page_id !== action.payload.page_id});
          }
      default:
        return state;
    }
  };

export default combineReducers({
  pageEdits,
  pageEditsOnDate
});