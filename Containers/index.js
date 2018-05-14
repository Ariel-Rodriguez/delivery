// This file is an index for reducers and sagas to be imported by app redux sgas.

import { reducer as restaurant } from './Restaurant/restaurant.redux'
import { reducer as home } from './Home/home.redux'
import { reducer as main } from './Main/main.redux'

/*
  I like this pattern, easy to add / remove  containers to sagas and store. And very easy to track its dependency ijection.
  Each container will reduce the data within their handlers, each container must know how to address derivated data from the API.
  A container could register new sagas or not.
*/

import restaurantSagas from './Restaurant/restaurant.sagas'
import homeSagas from './Home/home.sagas'
import mainSagas from './Main/main.sagas'

// This will define the keys for root store
export const reducers = {
  main,
  restaurant,
  home,
}

export const sagas = [
  restaurantSagas,
  homeSagas,
  mainSagas,
]
