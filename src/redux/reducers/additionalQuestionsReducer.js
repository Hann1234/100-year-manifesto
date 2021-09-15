import { combineReducers } from "redux";

// Stores all Additional Questions
const additionalQuestions = (state = [], action) => {
  switch (action.type) {
    case "CLEAR_ADDITIONAL_QUESTIONS":
      return [];
    case "SET_ADDITIONAL_QUESTIONS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  additionalQuestions,
});
