import { combineReducers } from 'redux';

// Stores mission text
const coreValues = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_CORE_VALUES':
      return [];
    case 'SET_CORE_VALUES':
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  coreValues
});