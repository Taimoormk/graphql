// ########## Import Components Here ##########
import * as types from '../constants';

const initial = {
  isLoading: '',
  data: [],
  error: null
};

export default function (state = initial, action) {
  switch (action.type) {
    case types.TEST:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}