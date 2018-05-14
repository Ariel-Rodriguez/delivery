import { all, put , takeLatest } from 'redux-saga/effects'
import RestaurantActions, { RestaurantTypes  } from './restaurant.redux';

function * fetchRestaurant(api) {
  const restaurant = { rating: 1 }
  yield put(RestaurantActions.restaurantSuccess(restaurant))
}

function * rootRestaurant(api) {
  yield all([
    takeLatest(RestaurantTypes.RESTAURANT_FETCH, fetchRestaurant, api)
  ])
}

export default rootRestaurant
