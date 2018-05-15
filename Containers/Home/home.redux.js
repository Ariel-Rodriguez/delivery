import { createReducer, createActions } from 'reduxsauce'
import { createSelector } from 'reselect'
import { isEqual, uniqBy, get, sortBy } from 'lodash'
import { makeDeepFilterBySlugList, createFiltersFromRestaurantList } from './filtering'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRestaurantListFetch: null,
  homeRestaurantListSuccess: ['page'],
  homeRestaurantListChangeFiltering: ['filtering'],
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  isLoading: false,
  restaurantList: [],
  pagination: {},
  filtering: {
    sortBy: '',
    filterBy: [],
  },
  filters: [],
  sorts: [{
    value: 'rating.average', label: 'Average',
  }, {
    value: 'minOrderValue', label: 'Minimum order',
  }],
}

/* ------------- Reducers ------------- */


const restaurantListSuccess = (state, { page }) => ({
  ...state,
  isLoading: false,
  restaurantList: uniqBy(state.restaurantList.concat(page.data), 'id'),
  pagination: page.pagination,
  filters: createFiltersFromRestaurantList(state, page.data),
})

const restaurantListChangeFiltering = (state, { filtering }) => ({
  ...state,
  filtering: {
    sortBy: get(filtering, 'sortBy', state.filtering.sortBy),
    filterBy: get(filtering, 'filterBy', state.filtering.filterBy),
  },
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.HOME_RESTAURANT_LIST_FETCH]: state => ({ ...state, isLoading: true }),
  [HomeTypes.HOME_RESTAURANT_LIST_SUCCESS]: restaurantListSuccess,
  [HomeTypes.HOME_RESTAURANT_LIST_CHANGE_FILTERING]: restaurantListChangeFiltering,
})

/* ------------- selectors ------------- */

export const filteringDidChange =(prevFiltering, filtering) =>
  prevFiltering.sortBy !== filtering.sortBy || !isEqual(prevFiltering.filterBy, filtering.filterBy)

export const getRestaurantListFiltered = state =>
  makeDeepFilterBySlugList('general.categories', state.filtering.filterBy)

export const getRestaurantList = createSelector(
  state => sortBy(state.restaurantList, [state.filtering.sortBy, 'id']).reverse(),
  state => getRestaurantListFiltered(state),
  (sortedList, filter) => filter(sortedList),
)
