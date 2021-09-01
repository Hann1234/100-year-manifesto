import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Add guiding principle
function* addGuidingPrinciple(action) {
  try {
    yield axios.post('/api/guidingPrinciples', action.payload); 
    yield put({ type: 'FETCH_GUIDING_PRINCIPLES'}); //Loads the guiding principles into reducer
  } catch (error) {
    console.log('Error adding guiding principle:', error);
    yield put({ type: 'ADD_GUIDING_PRINCIPLE_ERROR' });
  }
}

//Get guiding principles 
function* fetchGuidingPrinciples() {
  try {
    const guidingPrinciples = yield axios.get('/api/guidingPrinciples');
    yield put({type: 'SET_GUIDING_PRINCIPLES', payload: guidingPrinciples.data}) //Loads guiding principles into reducer
  } catch (error) {
    console.log('Error getting guiding principles:', error);
    yield put({ type: 'FETCH_GUIDING_PRINCIPLES_ERROR' });
  }
}

//Update guidingPrinciple
function* updateGuidingPrinciple(action) {
  try {
    yield axios.put(`/api/guidingPrinciples/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_GUIDING_PRINCIPLES'}); //Reloads guidingPrinciples
  } catch (error) {
    console.log('Error updating guiding principle:', error);
    yield put({ type: 'UPDATE_GUIDING_PRINCIPLE_ERROR' });
  }
}

//Delete mission 
function* deleteGuidingPrinciple(action) {
  try {
    console.log(action);
    yield axios.delete(`/api/guidingPrinciples/${action.payload}`);
    yield put({ type: 'FETCH_GUIDING_PRINCIPLES'}); //Reloads guiding principles
  } catch (error) {
    console.log('Error deleting guiding principle:', error);
    yield put({ type: 'DELETE_GUIDING_PRINCIPLE_ERROR' });
  }
}

function* guidingPrinciplesSaga() {
  yield takeLatest('ADD_GUIDING_PRINCIPLE', addGuidingPrinciple);
  yield takeLatest('FETCH_GUIDING_PRINCIPLES', fetchGuidingPrinciples);
  yield takeLatest('UPDATE_GUIDING_PRINCIPLE', updateGuidingPrinciple);
  yield takeLatest('DELETE_GUIDING_PRINCIPLE', deleteGuidingPrinciple);
}

export default guidingPrinciplesSaga;
