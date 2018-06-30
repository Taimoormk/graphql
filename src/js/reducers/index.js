// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
import testReducer from './testReducer';

const rootReducers = combineReducers({
  testReducer
});

export default rootReducers;