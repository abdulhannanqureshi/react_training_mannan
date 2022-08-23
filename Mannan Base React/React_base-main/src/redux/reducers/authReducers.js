
const authInitialState = {
  token: 'sdfasdf456'
}

const authReducers = (state = authInitialState, action) => {
  switch (action.type) {
    case 'LOGIN': return (
      {...state, token: action.payload}
    )
    case 'LOGOUT': return (
      {...state, token: action.payload}
    )
    default: return state
  }
}

export { authReducers, authInitialState }