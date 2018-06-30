// ########## Import Constants Here ##########
import * as types from '../constants';

export function testAction() {
  return {
    type: types.TEST
  }
}

export function testAttempt() {
  return {
    type: types.TEST
  }
}

export function testSuccess(data) {
  return {
    type: types.TEST,
    payload: data
  }
}

export function testFail(err) {
  return {
    type: types.TEST,
    payload: err
  }
}