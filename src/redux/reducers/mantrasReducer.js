import { combineReducers } from 'redux';

// Stores mission text
const mantras = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_MANTRAS':
      return [];
    case 'SET_MANTRAS':
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  mantras
});
