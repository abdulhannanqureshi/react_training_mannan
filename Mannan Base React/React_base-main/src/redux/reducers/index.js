// import { combineReducers } from 'redux'
import { authReducers } from './authReducers'

// const reducers = combineReducers({
//   auth: authReducers
// })


// export default reducers


// export const combineReducers = { 
//   state: {authReducers},
//   dispatch: {authInitialState} 
// }


// export const state = {
//   authReducers
// }

// export const dispatch = {
//   authInitialState
// }

export default function rootReducers() {
  return {
    auth: authReducers()
  }
}