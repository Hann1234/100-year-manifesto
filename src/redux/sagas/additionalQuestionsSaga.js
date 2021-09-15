import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Add additionalQuestion
function* addAdditionalQuestion(action) {
  try {
    yield axios.post("/api/additionalQuestions", action.payload);
    yield put({ type: "FETCH_ADDITIONAL_QUESTIONS" }); //Loads the additional Questions into reducer
  } catch (error) {
    console.log("Error adding additional question:", error);
    yield put({ type: "ADD_ADDITIONAL_QUESTION_ERROR" });
  }
}

//Get additionalQuestions statement
function* fetchAdditionalQuestions() {
  try {
    const additionalQuestions = yield axios.get("/api/additionalQuestions");
    yield put({
      type: "SET_ADDITIONAL_QUESTIONS",
      payload: additionalQuestions.data,
    }); //Loads additional questions into reducer
  } catch (error) {
    console.log("Error getting additional questions:", error);
    yield put({ type: "FETCH_ADDITIONAL_QUESTIONS_ERROR" });
  }
}

//Get additionalQuestions statement
function* fetchSpecificUserAdditionalQuestions(action) {
  try {
    const additionalQuestions = yield axios.get(
      `/api/additionalQuestions/${action.payload.id}`
    );
    yield put({
      type: "SET_ADDITIONAL_QUESTIONS",
      payload: additionalQuestions.data,
    }); //Loads specific user's additional questions into reducer
  } catch (error) {
    console.log(
      "Error getting additional questions for a specific user:",
      error
    );
    yield put({ type: "FETCH_USER_ADDITIONAL_QUESTIONS_ERROR" });
  }
}

//Update additionalQuestion statement
function* updateAdditionalQuestion(action) {
  try {
    yield axios.put(
      `/api/additionalQuestions/${action.payload.id}`,
      action.payload
    );
    yield put({ type: "FETCH_ADDITIONAL_QUESTIONS" }); //Reloads additional questions
  } catch (error) {
    console.log("Error updating additional questions:", error);
    yield put({ type: "UPDATE_ADDITIONAL_QUESTIONS_ERROR" });
  }
}

//Delete mission statement
function* deleteAdditionalQuestion(action) {
  try {
    yield axios.delete(`/api/additionalQuestions/${action.payload}`);
    yield put({ type: "FETCH_ADDITIONAL_QUESTIONS" }); //Reloads additional questions
  } catch (error) {
    console.log("Error deleting additional question:", error);
    yield put({ type: "DELETE_ADDITIONAL_QUESTION_ERROR" });
  }
}

function* additionalQuestionsSaga() {
  yield takeLatest("ADD_ADDITIONAL_QUESTION", addAdditionalQuestion);
  yield takeLatest("FETCH_ADDITIONAL_QUESTIONS", fetchAdditionalQuestions);
  yield takeLatest(
    "FETCH_USER_ADDITIONAL_QUESTIONS",
    fetchSpecificUserAdditionalQuestions
  );
  yield takeLatest("UPDATE_ADDITIONAL_QUESTION", updateAdditionalQuestion);
  yield takeLatest("DELETE_ADDITIONAL_QUESTION", deleteAdditionalQuestion);
}

export default additionalQuestionsSaga;
