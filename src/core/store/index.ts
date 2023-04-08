import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { multiClientMiddleware } from 'redux-axios-middleware'
import { apiClients, middlewareConfig } from 'core/middleware'
import reducers from 'core/store/reducer'

const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      multiClientMiddleware(apiClients, middlewareConfig)
    )
  )
}

export default initStore
