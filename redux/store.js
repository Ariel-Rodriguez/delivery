import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { createApi } from './api'
import { API_URL } from '../configs/app'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export function configureStore (initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  let api
  if (process.env.NODE_ENV !== 'production') {
    console.log('Using API fixture.')
    api = require('../fixtures/api').default
  } else {
    api = createApi({ baseURL: API_URL })
  }

  store.sagaTask = sagaMiddleware.run(rootSaga, api)

  return store
}

export default configureStore
