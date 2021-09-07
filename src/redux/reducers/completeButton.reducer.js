import { combineReducers } from "redux";

// Stores the "state" of ProgressBar completion
const completeButton = (state = {0:false}, action) => {
  console.log(`What is action in complete button reducer`, state);
  switch (action.type) {
    case "CLEAR_NEXT_BUTTON":
      return [];
    case "SET_COMPLETE_BUTTON":
        // return action.payload;
      return {...state, [action.payload.property]: action.payload.value};
    default:
      return state;
  }
};

export default combineReducers({
    completeButton,
});