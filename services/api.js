import apisauce from 'apisauce'
import es6promise from 'es6-promise'
import helpers from '../helpers'
import { API_URL } from '../configs/app'

let instance
es6promise.polyfill()

function responseTransform(response) {
  // apisauce bad practices :(
  response.data = helpers.objectToCamelCase(response.data)
}

async function authenticate() {
  if (instance.token) return true
  const { data } = await instance.api.get('/auth')
  if (!data.token) {
    throw Error('Could not authenticate. Token not found.')
  }
  instance.token = data.token
  instance.api.setHeader('token', instance.token)
  return true
}

async function fetchRestaurantList() {
  return instance.api.get('/restaurants')
}

async function fetchRestaurant(id) {
  return instance.api.get(`/restaurants/${id}`)
}

function isAuthenticated() {
  return !!instance.token
}

export default function createApi({ dev }) {
  if (instance) {
    return instance
  }
  if (dev) {
    console.log('Using FIXTURES API')
    // eslint-disable-next-line
    instance = require('../fixtures/api').default
    return instance
  }

  instance = {
    token: '',
    api: apisauce.create({
      baseURL: API_URL,
      headers: {
        Accept: 'application/json',
      },
      timeout: 2000,
    }),
  }

  instance.api.addResponseTransform(responseTransform)

  return {
    authenticate,
    fetchRestaurantList,
    fetchRestaurant,
    isAuthenticated,
  }
}
