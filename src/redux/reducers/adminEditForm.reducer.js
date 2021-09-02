import { combineReducers } from 'redux';

// Stores pageEdits
const pageEdits = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_PAGE_EDITS':
      return {};
    case 'SET_PAGE_EDITS':
        return action.payload;
    default:
      return state;
  }
};

// Stores pageEditsOnDate
const pageEditsOnDate = (state = [], action) => {
    switch (action.type) {
      case 'SET_PAGE_EDITS_ON_DATE':
          return action.payload;
      default:
        return state;
    }
  };

export default combineReducers({
  pageEdits,
  pageEditsOnDate
});