// ########## Import Dependencies Here ##########
import { takeLatest, all, fork } from 'redux-saga/effects';

// ########## Import Components Here ##########

// ########## Import Sagas Here ##########
import * as types from '../constants';
import testSaga from './testSaga';

function* watchTestAction() {
  yield takeLatest(types.TEST, testSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchTestAction)
  ]);
}