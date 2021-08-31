import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Add mantra
function* addMantra(action) {
  try {
    yield axios.post('/api/mantras', action.payload); 
    yield put({ type: 'FETCH_MANTRAS'}); //Loads the mantras into reducer
  } catch (error) {
    console.log('Error adding mantra:', error);
    yield put({ type: 'ADD_MANTRA_ERROR' });
  }
}

//Get mantras statement
function* fetchMantras() {
  try {
    const mantras = yield axios.get('/api/mantras');
    yield put({type: 'SET_MANTRAS', payload: mantras.data}) //Loads mantras into reducer
  } catch (error) {
    console.log('Error getting mantras:', error);
    yield put({ type: 'FETCH_MANTRAS_ERROR' });
  }
}

//Update mantra statement
function* updateMantra(action) {
  try {
    yield axios.put(`/api/mantras/${action.payload.id}`, action.payload.manifestoText);
    yield put({ type: 'FETCH_MANTRAS'}); //Reloads mantras
  } catch (error) {
    console.log('Error updating mantras:', error);
    yield put({ type: 'UPDATE_MANTRAS_ERROR' });
  }
}

//Delete mission statement
function* deleteMantra(action) {
  try {
    console.log(action);
    yield axios.delete(`/api/mantras/${action.payload}`);
    yield put({ type: 'FETCH_MANTRAS'}); //Reloads mantras
  } catch (error) {
    console.log('Error deleting mantra:', error);
    yield put({ type: 'DELETE_MANTRA_ERROR' });
  }
}

function* mantrasSaga() {
  yield takeLatest('ADD_MANTRA', addMantra);
  yield takeLatest('FETCH_MANTRAS', fetchMantras);
  yield takeLatest('UPDATE_MANTRA', updateMantra);
  yield takeLatest('DELETE_MANTRA', deleteMantra);
}

export default mantrasSaga;
