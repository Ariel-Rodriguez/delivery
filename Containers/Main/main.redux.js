import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authenticate: null,
  authenticateSuccess: null,
  authenticateError: null,
})

export const MainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
  isAuth: false,
  error: false,
}

/* ------------- Reducers ------------- */

const authenticateSuccess = () => ({
  error: false,
  isAuth: true,
})

const authenticateError = () => ({
  error: true,
  isAuth: false,
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [MainTypes.AUTHENTICATE_SUCCESS]: authenticateSuccess,
  [MainTypes.AUTHENTICATE_ERROR]: authenticateError,
})

/* ------------- selectors ------------- */
