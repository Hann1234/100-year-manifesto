import { combineReducers } from "redux";

// Stores NextButton and BackButton "state"
const nextButton = (state = 0, action) => {
  switch (action.type) {
    case "CLEAR_NEXT_BUTTON":
      return -1;
    case "SET_NEXT_BUTTON":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  nextButton,
});
