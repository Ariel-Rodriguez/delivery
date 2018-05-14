import { all, call } from 'redux-saga/effects'

import { sagas } from '../Containers'


function * rootSaga(api) {
  yield all(sagas.map(saga => call(saga, api)))
}

export default rootSaga
