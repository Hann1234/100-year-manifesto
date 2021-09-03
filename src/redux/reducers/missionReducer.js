import { combineReducers } from 'redux';

// Stores mission text
const mission = (state = [], action) => {
  console.log(`What is action in mission reducer`, state)
  switch (action.type) {
    case 'CLEAR_MISSION':
      return [];
    case 'SET_MISSION':
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  mission
});
