import { all, put, call, takeLatest } from 'redux-saga/effects'
import HomeActions, { HomeTypes } from './home.redux'

function* fetchRestaurantList(api) {
  try {
    const { data, ok, status } = yield call(api.fetchRestaurantList)
    if (ok) {
      yield put(HomeActions.homeRestaurantListSuccess(data))
    } else {
      console.log(status)
      yield put(HomeActions.homeRestaurantListError(status))
    }
  } catch (e) {
    console.log(e)
    yield put(HomeActions.homeRestaurantListError(e))
  }
}

function* rootHome(api) {
  yield all([
    takeLatest(HomeTypes.HOME_RESTAURANT_LIST_FETCH, fetchRestaurantList, api),
  ])
}

export default rootHome
