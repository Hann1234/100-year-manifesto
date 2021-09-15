import { combineReducers } from "redux";

// Stores access codes
const accessCodes = (state = [], action) => {
  switch (action.type) {
    case "ADMIN_SET_ACCESS_CODES":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  accessCodes,
});
