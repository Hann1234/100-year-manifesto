import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import missionReducer from './missionReducer';
import mantrasReducer from './mantrasReducer';
import coreValuesReducer from './coreValuesReducer';
import lifeGoalsReducer from './lifeGoalsReducer';
import forGoodReducer from './forGoodReducer';
import guidingPrinciplesReducer from  './guidingPrinciplesReducer';
import additionalQuestionsReducer from './additionalQuestionsReducer';
import adminEditFormReducer from './adminEditForm.reducer';
import userList from './adminEditUsers.reducer';
import nextButtonReducer from './nextButtonReducer';
import completeButtonReducer from './completeButton.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  missionReducer,
  mantrasReducer,
  coreValuesReducer,
  lifeGoalsReducer,
  forGoodReducer,
  guidingPrinciplesReducer,
  additionalQuestionsReducer,
  adminEditFormReducer,
  userList,
  nextButtonReducer,
  completeButtonReducer,
});

export default rootReducer;
