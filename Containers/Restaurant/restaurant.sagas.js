import { all, put, call, takeLatest } from 'redux-saga/effects'
import RestaurantActions, { RestaurantTypes } from './restaurant.redux'

function* fetchRestaurant(api, { id }) {
  const restaurant = yield call(api.fetchRestaurant, id)
  yield put(RestaurantActions.restaurantFetchSuccess(restaurant))
}

function* rootRestaurant(api) {
  yield all([
    takeLatest(RestaurantTypes.RESTAURANT_FETCH, fetchRestaurant, api),
  ])
}

export default rootRestaurant
