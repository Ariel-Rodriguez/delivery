import apisauce from 'apisauce'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { objectToCamelCase } from './helpers'

function responseTransform() {
  response => objectToCamelCase(response.data)
}

function createApi({ baseURL, responseTransform = responseTransform }) {
  es6promise.polyfill()

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 2000,
  })

  const instance = {
    token: ''
  }

  async function authenticate() {
    const { data } = this.api.get('/auth')
    if (!data.token) {
      throw Error('Could not authenticate. Token not found.')
    }
    instance.token = data.token
    this.api.setHeader('token', instance.token)
    return true
  }

  async function fetchRestaurantList() {
    return api.get('/restaurants')
  }

  async function fetchRestaurant(id) {
    return api.get(`/restaurants/${id}`)
  }

  return {
    fetchRestaurantList,
    fetchRestaurant
  }
}

export {
  createApi,
  responseTransform,
}
