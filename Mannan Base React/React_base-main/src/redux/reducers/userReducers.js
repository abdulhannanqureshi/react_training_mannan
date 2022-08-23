
import { UserActionType } from '../action/UserAction/actionType'

const userInitialState = {
  users: [],
  count: 1,
  userDetail: null
}

const userReducers = (state = userInitialState, { type, payload }) => {
  switch(type) {
    case UserActionType.USERS: return (
      {...state, users: payload, count: payload.length}
    )
    case UserActionType.DELETE: 
      let usersCopy = [...state.users]
      let index = state.users.findIndex(e => e.id === payload.id) 
      usersCopy.splice(index, 1)
      return (
        { ...state, users: usersCopy, count: state.count - 1 }
      )
    case UserActionType.DETAIL: return (
        {...state, userDetail: payload }
      )
    case UserActionType.UPDATE_DETAIL: 
      state.userDetail = {...state.userDetail, 
        username: payload.username,
        email: payload.email,
        phone: payload.phone,
        website: payload.website
      }
      return state

    default: return state
  }
}

export { userInitialState, userReducers }