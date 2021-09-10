import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Get access codes from access_code table
function* fetchAccessCodes() {
    try {
        const accessCodes = yield axios.get(`/api/adminAccessCodes`);
        yield put({type: 'ADMIN_SET_ACCESS_CODES', payload: accessCodes.data}) // Loads accessCodes into reducer
    } catch (error) {
        console.log('Error getting access codes:', error);
        yield put({ type: 'ADMIN_FETCH_ACCESS_CODES_ERROR' });
    }
}

// Post access code to access_code table
function* addAccessCode(action) {
    try {
        yield axios.post(`/api/adminAccessCodes`, action.payload); 
        yield put({ type: 'ADMIN_FETCH_ACCESS_CODES' }); // reload access codes
    } catch (error) {
        console.log('Error posting access code: ', error);
        yield put({ type: 'ADMIN_UPDATE_ACCESS_CODE_ERROR' });
    }
}

// Delete access code from access_code table
function* deleteAccessCode(action) {
    try {
        yield axios.delete(`/api/adminAccessCodes/${action.payload.id}`);
        yield put({ type: 'ADMIN_FETCH_ACCESS_CODES' }); // reload access codes
    } catch (error) {
        console.log('Error deleting access code:', error);
        yield put({ type: 'ADMIN_DELETE_ACCESS_CODE_ERROR' });
    }
}

// Update access code in access_code table
function* updateAccessCode(action) {
    try {
        yield axios.put(`/api/adminAccessCodes/${action.payload.id}`, action.payload); 
        yield put({ type: 'ADMIN_FETCH_ACCESS_CODES' }); // reload access codes
    } catch (error) {
        console.log('Error updating access code:', error);
        yield put({ type: 'ADMIN_UPDATE_ACCESS_CODE_ERROR' });
    }
}

function* adminAccessCodesSaga() {
  yield takeLatest('ADMIN_FETCH_ACCESS_CODES', fetchAccessCodes);
  yield takeLatest('ADMIN_ADD_ACCESS_CODE', addAccessCode);
  yield takeLatest('ADMIN_DELETE_ACCESS_CODE', deleteAccessCode);
  yield takeLatest('ADMIN_UPDATE_ACCESS_CODE', updateAccessCode);
}

export default adminAccessCodesSaga;