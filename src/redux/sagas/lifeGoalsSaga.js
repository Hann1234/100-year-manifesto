import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Add life goal
function* addLifeGoal(action) {
  try {
    yield axios.post('/api/lifeGoals', action.payload); 
    yield put({ type: 'FETCH_LIFE_GOALS'}); //Loads the life goals into reducer
  } catch (error) {
    console.log('Error adding life goal:', error);
    yield put({ type: 'ADD_LIFE_GOAL_ERROR' });
  }
}

//Get life goals statement
function* fetchLifeGoals() {
  try {
    const lifeGoals = yield axios.get('/api/lifeGoals');
    yield put({type: 'SET_LIFE_GOALS', payload: lifeGoals.data}) //Loads life goals into reducer
  } catch (error) {
    console.log('Error getting life goals:', error);
    yield put({ type: 'FETCH_LIFE_GOALS_ERROR' });
  }
}

//Update life goals statement
function* updateLifeGoal(action) {
  try {
    yield axios.put(`/api/lifeGoals/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_LIFE_GOALS'}); //Reloads life goals
  } catch (error) {
    console.log('Error updating life goal:', error);
    yield put({ type: 'UPDATE_LIFE_GOAL_ERROR' });
  }
}

//Delete mission statement
function* deleteLifeGoal(action) {
  try {
    console.log(action);
    yield axios.delete(`/api/lifeGoals/${action.payload}`);
    yield put({ type: 'FETCH_LIFE_GOALS'}); //Reloads life goals
  } catch (error) {
    console.log('Error deleting life goal:', error);
    yield put({ type: 'DELETE_LIFE_GOAL_ERROR' });
  }
}

function* lifeGoalsSaga() {
  yield takeLatest('ADD_LIFE_GOAL', addLifeGoal);
  yield takeLatest('FETCH_LIFE_GOALS', fetchLifeGoals);
  yield takeLatest('UPDATE_LIFE_GOAL', updateLifeGoal);
  yield takeLatest('DELETE_LIFE_GOAL', deleteLifeGoal);
}

export default lifeGoalsSaga;
