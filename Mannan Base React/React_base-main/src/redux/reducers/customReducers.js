
const customInitialState = {
  customer_name: 'IYI'
}

const customReducers = (state = customInitialState, action) => {
  switch (action.type) {
    case 'IYI': return (
      {...state, customer_name: action.payload}
    )
    default: return state
  }
}

export { customReducers, customInitialState }