import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import missionSaga from './missionSaga';
import mantrasSaga from './mantrasSaga';
import coreValuesSaga from './coreValuesSaga';
import lifeGoalsSaga from './lifeGoalsSaga';
import forGoodSaga from './forGoodSaga';
import guidingPrinciplesSaga from './guidingPrinciplesSaga';
import additionalQuestionsSaga from './additionalQuestionsSaga';
import adminEditFormSaga from './adminEditForm.saga';
import adminEditUsersSaga from './adminEditUsers.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    missionSaga(),
    mantrasSaga(),
    coreValuesSaga(),
    lifeGoalsSaga(),
    forGoodSaga(),
    guidingPrinciplesSaga(),
    additionalQuestionsSaga(),
    adminEditFormSaga(),
    adminEditUsersSaga(),
  ]);
}
