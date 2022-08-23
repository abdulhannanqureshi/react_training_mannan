import React, { createContext, useReducer } from 'react'
import combineReducers from 'react-combine-reducers'

import { authReducers, authInitialState } from '../reducers/authReducers'
import { customReducers, customInitialState } from '../reducers/customReducers'
import { userReducers, userInitialState } from '../reducers/userReducers'

import { applyMiddleware } from './middleware'
import { useActions } from '../action'

const store = createContext({});
const { Provider } = store;


const StateProvider = ({ children }) => {

  const [rootReducerCombined, initialStateCombined] = combineReducers({
    auth: [authReducers, authInitialState],
    custom: [customReducers, customInitialState],
    userReducer: [userReducers, userInitialState]
  })

  const [states, dispatched] = useReducer(rootReducerCombined, initialStateCombined)

  const enhancedDispatch = applyMiddleware(dispatched)

  const actions = useActions(states, enhancedDispatch)

 return (
   <Provider 
    value={{ states, actions }}
    >
     {children}
   </Provider>
 )
}

export { store, StateProvider }

// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
// import promiseMiddleware from 'redux-promise-middleware';
// import reducers from '../reducers'


// let middleware = [thunkMiddleware, promiseMiddleware]

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

// export default store