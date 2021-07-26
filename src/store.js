import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import index from './store/index'

const reducer = combineReducers({
  index
})

const store = configureStore({
  reducer,
})

export default store;