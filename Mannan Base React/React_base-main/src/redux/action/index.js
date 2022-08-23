import { authAction } from './AuthAction/action'
import { customAction } from './customAction/action'
import { userAction } from './UserAction/action'

export const useActions = (state, dispatch) => ({
  authActions: {...authAction(state, dispatch)},
  customActions: {...customAction(state, dispatch)},
  userAction: {...userAction(state, dispatch)}
})
