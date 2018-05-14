import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

es6promise.polyfill()

function createApi({ dev = false }) {

  function fetchRestaurantList() {
    return [{ title: 'a' }]
  }

  return {
    fetchRestaurantList,
  }
}

export {
  createApi,
}
