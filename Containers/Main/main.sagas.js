import { all, put, call, takeLatest } from 'redux-saga/effects'
import MainActions, { MainTypes } from './main.redux'

function* authenticate(api) {
  try {
    const isAuth = yield call(api.authenticate)
    if (isAuth) {
      yield put(MainActions.authenticateSuccess())
    } else {
      yield put(MainActions.authenticateError())
    }
  } catch (e) {
    yield put(MainActions.authenticateError())
  }
}

function* rootMain(api) {
  yield all([
    takeLatest(MainTypes.AUTHENTICATE, authenticate, api),
  ])
}

export default rootMain
