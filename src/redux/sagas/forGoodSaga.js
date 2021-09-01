import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Add for good
function* addForGood(action) {
  try {
    yield axios.post('/api/forGoods', action.payload); 
    yield put({ type: 'FETCH_FOR_GOODS'}); //Loads the for goods into reducer
  } catch (error) {
    console.log('Error adding for good:', error);
    yield put({ type: 'ADD_FOR_GOOD_ERROR' });
  }
}

//Get for goods statement
function* fetchForGoods() {
  try {
    const forGoods = yield axios.get('/api/forGoods');
    yield put({type: 'SET_FOR_GOODS', payload: forGoods.data}) //Loads for goods into reducer
  } catch (error) {
    console.log('Error getting for goods:', error);
    yield put({ type: 'FETCH_FOR_GOODS_ERROR' });
  }
}

//Update for goods statement
function* updateForGood(action) {
  try {
    yield axios.put(`/api/forGoods/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_FOR_GOODS'}); //Reloads for goods
  } catch (error) {
    console.log('Error updating for good:', error);
    yield put({ type: 'UPDATE_FOR_GOOD_ERROR' });
  }
}

//Delete mission statement
function* deleteForGood(action) {
  try {
    console.log(action);
    yield axios.delete(`/api/forGoods/${action.payload}`);
    yield put({ type: 'FETCH_FOR_GOODS'}); //Reloads for goods
  } catch (error) {
    console.log('Error deleting for good:', error);
    yield put({ type: 'DELETE_FOR_GOOD_ERROR' });
  }
}

function* forGoodSaga() {
  yield takeLatest('ADD_FOR_GOOD', addForGood);
  yield takeLatest('FETCH_FOR_GOODS', fetchForGoods);
  yield takeLatest('UPDATE_FOR_GOOD', updateForGood);
  yield takeLatest('DELETE_FOR_GOOD', deleteForGood);
}

export default forGoodSaga;
