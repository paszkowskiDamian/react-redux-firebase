import { applyMiddleware, createStore, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './epics/rootEpic'
import { rootReducer } from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [createEpicMiddleware(rootEpic)]
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)