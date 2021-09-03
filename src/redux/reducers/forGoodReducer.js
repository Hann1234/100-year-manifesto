import { combineReducers } from 'redux';

// Stores all for good elements
const forGood = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_FOR_GOOD':
      return [];
    case 'SET_FOR_GOODS':
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  forGood
});
