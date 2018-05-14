import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  restaurantFetch: ['id'],
  restaurantFetchSuccess: ['restaurant'],
})

export const RestaurantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  isLoading: false,
  id: '',
  rating: ''
}

/* ------------- Reducers ------------- */

const restaurantFetchSuccess = (state, { restaurant }) => ({
  ...restaurant,
  isLoading: false,
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [RestaurantTypes.RESTAURANT_FETCH]: state => ({ ...state, isLoading: true }),
  [RestaurantTypes.RESTAURANT_FETCH_SUCCESS]: restaurantFetchSuccess,
})

/* ------------- selectors ------------- */
