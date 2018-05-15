import { all, put, call, takeLatest } from 'redux-saga/effects'
import RestaurantActions, { RestaurantTypes } from './restaurant.redux'

function* fetchRestaurant(api, { id }) {
  const { data } = yield call(api.fetchRestaurant, id)
  yield put(RestaurantActions.restaurantFetchSuccess(data))
}

function* rootRestaurant(api) {
  yield all([
    takeLatest(RestaurantTypes.RESTAURANT_FETCH, fetchRestaurant, api),
  ])
}

export default rootRestaurant
