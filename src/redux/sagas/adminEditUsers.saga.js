import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Get users from user table
function* fetchUsers() {
    try {
        const userList = yield axios.get(`/api/adminEditUsers`);
        yield put({type: 'ADMIN_SET_USERS', payload: userList.data}); // Loads userList into reducer
    } catch (error) {
        console.log('Error getting userList:', error);
        yield put({ type: 'ADMIN_FETCH_USERS_ERROR' });
    }
}

// Update user role in user table
function* updateUserRole(action) {
    try {
        yield axios.put(`/api/adminEditUsers/${action.payload.id}`, action.payload); 
        yield put({ type: 'ADMIN_FETCH_USERS' }); // reload users
    } catch (error) {
        console.log('Error updating user role:', error);
        yield put({ type: 'ADMIN_UPDATE_USER_ROLE_ERROR' });
    }
}

// Delete user from user table
function* deleteUser(action) {
    try {
        yield axios.delete(`/api/adminEditUsers/${action.payload.id}`);
        yield put({ type: 'ADMIN_FETCH_USERS' }); // Reload users
    } catch (error) {
        console.log('Error deleting user:', error);
        yield put({ type: 'ADMIN_DELETE_USER_ERROR' });
    }
}

function* adminEditUsersSaga() {
  yield takeLatest('ADMIN_FETCH_USERS', fetchUsers);
  yield takeLatest('ADMIN_UPDATE_USER_ROLE', updateUserRole);
  yield takeLatest('ADMIN_DELETE_USER', deleteUser);
}

export default adminEditUsersSaga;