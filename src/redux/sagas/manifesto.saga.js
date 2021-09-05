import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchManifestoText(action) {
  try {
    yield put({ type: 'FETCH_MISSION'});
    yield put({ type: 'FETCH_MANTRAS'});
    yield put({ type: 'FETCH_FOR_GOODS'});
    yield put({ type: 'FETCH_GUIDING_PRINCIPLES'});
    yield put({ type: 'FETCH_CORE_VALUES'});
    yield put({ type: 'FETCH_LIFE_GOALS'});
  } catch (error) {
    console.log('Error getting manifesto text:', error);
  }
}

function* manifestoText() {
  yield takeLatest('FETCH_MANIFESTO_TEXT', fetchManifestoText);
}

export default manifestoText;
