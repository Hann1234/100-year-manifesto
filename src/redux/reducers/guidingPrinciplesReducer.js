import { combineReducers } from "redux";

// Stores all guiding principles elements
const guidingPrinciples = (state = [], action) => {
  switch (action.type) {
    case "CLEAR_GUIDING_PRINCIPLES":
      return [];
    case "SET_GUIDING_PRINCIPLES":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  guidingPrinciples,
});
