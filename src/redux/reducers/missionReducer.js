import { combineReducers } from 'redux';

// Stores mission text
const mission = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_MISSION':
      return {};
    case 'SET_MISSION':
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  mission
});
