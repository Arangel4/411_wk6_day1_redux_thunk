import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export default createStore(reducers, state, applyMiddleware(thunk))