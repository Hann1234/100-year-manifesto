import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Add mission
function* addMission(action) {
  try {
    yield axios.post('/api/missionStatement', action.payload); 
    yield put({type: 'CLEAR_MISSION'}); //Clears reducer
    yield put({ type: 'FETCH_MISSION'}); //Loads the mission statement into reducer
  } catch (error) {
    console.log('Error adding mission:', error);
    yield put({ type: 'ADD_MISSION_ERROR' });
  }
}

//Get mission statement
function* fetchMission() {
  try {
    const mission = yield axios.get('/api/missionStatement');
    yield put({type: 'SET_MISSION', payload: mission.data}) //Loads mission into reducer
  } catch (error) {
    console.log('Error getting mission:', error);
    yield put({ type: 'FETCH_MISSION_ERROR' });
  }
}

//Update mission statement
function* updateMission(action) {
  try {
    yield axios.put(`/api/missionStatement/${action.payload.id}`, action.payload.manifesto_text);
    yield put({ type: 'FETCH_MISSION'}); //Reloads mission
  } catch (error) {
    console.log('Error updating mission:', error);
    yield put({ type: 'UPDATE_MISSION_ERROR' });
  }
}

//Delete mission statement
function* deleteMission(action) {
  try {
    console.log(action);
    yield axios.delete(`/api/missionStatement/${action.payload}`);
    yield put({ type: 'FETCH_MISSION'}); //Reloads mission
  } catch (error) {
    console.log('Error deleting mission:', error);
    yield put({ type: 'DELETE_MISSION_ERROR' });
  }
}

function* missionSaga() {
  yield takeLatest('ADD_MISSION', addMission);
  yield takeLatest('FETCH_MISSION', fetchMission);
  yield takeLatest('UPDATE_MISSION', updateMission);
  yield takeLatest('DELETE_MISSION', deleteMission);
}

export default missionSaga;
