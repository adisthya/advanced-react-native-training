// @flow

import {call, put, takeLatest} from 'redux-saga/effects';
import fetchTransactions from '../../utils/fetch/fetchTransaction';
export default function* transactionSagaWatcher(action: *): Generator<*, *, *> {
  yield takeLatest('FETCH_TRANSACTION_LIST', fetchTranasction);
}

export function* fetchTranasction(action: *): Generator<*, *, *> {\
  try {
    let {data} = yield call(fetchTransactions);
    if (data) {
      yield put({type: 'UPDATE_TRANSACTIONS', payload: {data}});
    }
  } catch (error) {
    console.log('error : ', error);
  }
}
