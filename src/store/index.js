import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import marketCompanies from './market_companies'

const reducer = combineReducers({marketCompanies})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware
))
const store = createStore(reducer, middleware)

export default store 
export * from './market_companies'