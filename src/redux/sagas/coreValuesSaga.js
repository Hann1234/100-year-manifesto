import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Add core value
function* addCoreValue(action) {
  try {
    yield axios.post("/api/coreValues", action.payload);
    yield put({ type: "FETCH_CORE_VALUES" }); //Loads the core values into reducer
  } catch (error) {
    console.log("Error adding CORE VALUE:", error);
    yield put({ type: "ADD_CORE_VALUE_ERROR" });
  }
}

//Get core values
function* fetchCoreValues() {
  try {
    const coreValues = yield axios.get("/api/coreValues");
    yield put({ type: "SET_CORE_VALUES", payload: coreValues.data }); //Loads core values into reducer
  } catch (error) {
    console.log("Error getting core values:", error);
    yield put({ type: "FETCH_CORE_VALUES_ERROR" });
  }
}

//Get specific user's core values
function* fetchSpecificUserCoreValues(action) {
  try {
    const coreValues = yield axios.get(`/api/coreValues/${action.payload.id}`);
    yield put({ type: "SET_CORE_VALUES", payload: coreValues.data }); //Loads specific user's core values into reducer
  } catch (error) {
    console.log("Error getting specific users core values:", error);
    yield put({ type: "FETCH_USER_CORE_VALUES_ERROR" });
  }
}

//Update core value
function* updateCoreValues(action) {
  try {
    yield axios.put(`/api/coreValues/${action.payload.id}`, action.payload);
    yield put({ type: "FETCH_CORE_VALUES" }); //Reloads core values
  } catch (error) {
    console.log("Error updating core values:", error);
    yield put({ type: "UPDATE_CORE_VALUE_ERROR" });
  }
}

//Delete core value
function* deleteCoreValue(action) {
  try {
    yield axios.delete(`/api/CoreValues/${action.payload}`);
    yield put({ type: "FETCH_CORE_VALUES" }); //Reloads core values
  } catch (error) {
    console.log("Error deleting core value:", error);
    yield put({ type: "DELETE_CORE_VALUE_ERROR" });
  }
}

function* coreValuesSaga() {
  yield takeLatest("ADD_CORE_VALUE", addCoreValue);
  yield takeLatest("FETCH_CORE_VALUES", fetchCoreValues);
  yield takeLatest("FETCH_USER_CORE_VALUES", fetchSpecificUserCoreValues);
  yield takeLatest("UPDATE_CORE_VALUE", updateCoreValues);
  yield takeLatest("DELETE_CORE_VALUE", deleteCoreValue);
}

export default coreValuesSaga;
