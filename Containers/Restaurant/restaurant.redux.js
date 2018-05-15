import { createReducer, createActions } from 'reduxsauce'
import { createSelector } from 'reselect'


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
  address: { streetName: '', streetNumber: '' },
  info: { name: '', categories: '', logoUri: '' },
  rating: { average: '' },
  sections: [],
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

export const getRestaurantCardInformation = ({
  address: {
    streetName, streetNumber, city, zipcode,
  },
  info: { name, categories, logoUri },
  rating: { average },
}) => ({
  average, categories, city, logoUri, name, streetName, streetNumber, zipcode,
})
