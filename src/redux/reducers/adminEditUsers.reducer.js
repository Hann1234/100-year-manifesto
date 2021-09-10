import { combineReducers } from 'redux';

// Stores pageEdits
const userList = (state = [], action) => {
  switch (action.type) {
    case 'ADMIN_SET_USERS':
        return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  userList
});