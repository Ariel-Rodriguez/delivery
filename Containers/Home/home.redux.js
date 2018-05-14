import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRestaurantListFetch: null,
  homeRestaurantListSuccess: ['restaurantList'],
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  isLoading: false,
  restaurantList: [],
}

/* ------------- Reducers ------------- */

const restaurantListSuccess = (state, { restaurantList }) => ({
  isLoading: false,
  restaurantList: state.restaurantList.concat(restaurantList)
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.HOME_RESTAURANT_LIST_FETCH]: state => ({ ...state, isLoading: true }),
  [HomeTypes.HOME_RESTAURANT_LIST_SUCCESS]: restaurantListSuccess,
})

/* ------------- selectors ------------- */
