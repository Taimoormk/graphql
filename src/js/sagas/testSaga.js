// ########## Import Dependencies Here ##########
import { put, call } from 'redux-saga/effects';

// ########## Import Components Here ##########
import * as actions from '../actions';
import * as api from '../api';

export default function* loadAppSaga() {
  yield put(actions.testAttempt());
  try {
    const response = yield call(api.testResponse);
    yield put(actions.testSuccess(response));   
  } catch (error) {
    yield put(actions.testFail(error)); 
  }
}