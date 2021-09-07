import { combineReducers } from "redux";

// Stores NextButton and BackButton "state"
const nextButton = (state = 0, action) => {
  console.log(`What is action in next button reducer`, state);
  switch (action.type) {
    case "CLEAR_NEXT_BUTTON":
      return [];
    case "SET_NEXT_BUTTON":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  nextButton,
});
