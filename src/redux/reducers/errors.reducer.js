import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your email and password!';
    case 'LOGIN_FAILED':
      return "Oops! The email and password didn't match. Try again!";
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a email and password!';
    case 'REGISTRATION_FAILED':
      return "Oops! That didn't work. The email might already be taken. Try again!";
    default:
      return state;
  }
};

const missionMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_MISSION_ERROR':
      return "Oops! Something went wrong adding the mission statement"
    case 'FETCH_MISSION_ERROR':
      return "Oops! Something went wrong getting the mission statement"
    case 'UPDATE_MISSION_ERROR':
      return "Oops! Something went wrong updating the mission statement"
    case 'DELETE_MISSION_ERROR':
      return "Oops! Something went wrong deleting the mission statement"
    default:
      return state;
  }
}; 

const mantrasMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_MANTRA_ERROR':
      return "Oops! Something went wrong adding the mantra"
    case 'FETCH_MANTRAS_ERROR':
      return "Oops! Something went wrong getting the mantras"
    case 'UPDATE_MANTRA_ERROR':
      return "Oops! Something went wrong updating the mantra"
    case 'DELETE_MANTRA_ERROR':
      return "Oops! Something went wrong deleting the mantra"
    default:
      return state;
  }
}; 

const coreValuesMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_CORE_VALUE_ERROR':
      return "Oops! Something went wrong adding the core value"
    case 'FETCH_CORE_VALUES_ERROR':
      return "Oops! Something went wrong getting the core values"
    case 'UPDATE_CORE_VALUE_ERROR':
      return "Oops! Something went wrong updating the core value"
    case 'DELETE_CORE_VALUE_ERROR':
      return "Oops! Something went wrong deleting the core value"
    default:
      return state;
  }
}; 

const lifeGoalsMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_LIFE_GOAL_ERROR':
      return "Oops! Something went wrong adding the life goal"
    case 'FETCH_LIFE_GOALS_ERROR':
      return "Oops! Something went wrong getting the life goals"
    case 'UPDATE_LIFE_GOAL_ERROR':
      return "Oops! Something went wrong updating the life goal"
    case 'DELETE_LIFE_GOAL_ERROR':
      return "Oops! Something went wrong deleting the life goal"
    default:
      return state;
  }
}; 

const forGoodMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_FOR_GOOD_ERROR':
      return "Oops! Something went wrong adding the for good"
    case 'FETCH_FOR_GOOD_ERROR':
      return "Oops! Something went wrong getting the for good"
    case 'UPDATE_FOR_GOOD_ERROR':
      return "Oops! Something went wrong updating the for good"
    case 'DELETE_FOR_GOOD_ERROR':
      return "Oops! Something went wrong deleting the for good"
    default:
      return state;
  }
}; 

const guidingPrinciplesMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_GUIDING_PRINCIPLE_ERROR':
      return "Oops! Something went wrong adding the guiding principle"
    case 'FETCH_GUIDING_PRINCIPLES_ERROR':
      return "Oops! Something went wrong getting the guiding principles"
    case 'UPDATE_GUIDING_PRINCIPLE_ERROR':
      return "Oops! Something went wrong updating the guiding principle"
    case 'DELETE_GUIDING_PRINCIPLE_ERROR':
      return "Oops! Something went wrong deleting the guiding principle"
    default:
      return state;
  }
};

const adminEditFormMessage = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_PAGE_EDITS_ERROR':
      return "Oops! Something went wrong retrieving the latest edits for that page"
    case 'FETCH_EDIT_ON_DATE_ERROR':
      return "Oops! Something went wrong retrieving a previous version of the edits for that page"
    case 'ADD_PAGE_EDIT_ERROR':
      return "Oops! Something went wrong posting a new edit for that page"
    case 'DELETE_PAGE_EDIT_ERROR':
      return "Oops! Something went wrong deleting an edit for that page"
    default:
      return state;
  }
}; 

const additionalQuestionsMessage = (state = '', action) => {
  switch (action.type) {
    case 'ADD_ADDITIONAL_QUESTION_ERROR':
      return "Oops! Something went wrong adding the additional question"
    case 'FETCH_ADDITIONAL_QUESTIONS_ERROR':
      return "Oops! Something went wrong getting the additional questions"
    case 'UPDATE_ADDITIONAL_QUESTION_ERROR':
      return "Oops! Something went wrong updating the additional question"
    case 'DELETE_ADDITIONAL_QUESTION_ERROR':
      return "Oops! Something went wrong deleting the additional question"
    default:
      return state;
  }
}; 


// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
  missionMessage,
  mantrasMessage,
  coreValuesMessage,
  lifeGoalsMessage,
  forGoodMessage,
  guidingPrinciplesMessage,
  additionalQuestionsMessage,
  adminEditFormMessage,
});
