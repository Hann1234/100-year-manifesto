import { combineReducers } from 'redux';

// Stores all life goals
const lifeGoals = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_LIFE_GOALS':
      return [];
    case 'SET_LIFE_GOALS':
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  lifeGoals
});
