export default {
  fetchRestaurantList() {
    return require('./data/restaurants').default
  },

  fetchRestaurant() {
    return require('./data/restaurant').default
  }
}
