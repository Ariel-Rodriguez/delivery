import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRestaurantListFetch: null,
  homeRestaurantListSuccess: ['page'],
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  isLoading: false,
  restaurantList: [],
  pagination: {},
}

/* ------------- Reducers ------------- */

const restaurantListSuccess = (state, { page }) => ({
  isLoading: false,
  restaurantList: state.restaurantList.concat(page.data),
  pagination: page.pagination,
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.HOME_RESTAURANT_LIST_FETCH]: state => ({ ...state, isLoading: true }),
  [HomeTypes.HOME_RESTAURANT_LIST_SUCCESS]: restaurantListSuccess,
})

/* ------------- selectors ------------- */
