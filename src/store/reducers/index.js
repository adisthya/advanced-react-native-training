// @flow

import {combineReducers} from 'redux';

import counterReducer from './counter';
import transactionReducer from './transaction';
import loginReducer from './login';

export default combineReducers({
  login: loginReducer,
  counter: counterReducer,
  transaction: transactionReducer,
});
