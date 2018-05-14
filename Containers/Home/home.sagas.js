import { all, put, call, takeLatest } from 'redux-saga/effects'
import HomeActions, { HomeTypes  } from './home.redux';

function * fetchRestaurantList(api) {
  const list = yield call(api.fetchRestaurantList)
  yield put(HomeActions.homeRestaurantListSuccess(list))
}

function * rootHome(api) {
  yield all([
    takeLatest(HomeTypes.HOME_RESTAURANT_LIST_FETCH, fetchRestaurantList, api)
  ])
}

export default rootHome
