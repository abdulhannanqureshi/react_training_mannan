import * as API from 'api/API'
import { API_ROUTES } from 'utils/Common/Constant'
import { UserActionType } from './actionType'
import * as CommonServices from 'utils/Common/CommonService'

export const userAction = (state, dispatch) => ({
  setUsers: async (params) => {
    try {
      for(const property in params) if(!params[property]) delete params[property]
      const res = await API.getAPI(API_ROUTES.USERS_API, params)
      dispatch({ type: UserActionType.USERS, payload: res })
      return res
    } catch (err) {
      dispatch({ type: UserActionType.USERS, payload: [] })
    }
      // Axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`; 
  },
  deleteUser: (user) => {
    dispatch({ type: UserActionType.DELETE, payload: user })
    CommonServices.forSuccess('Deleted successfully', 'Success')
  },
  setDetail: async (id) => {
    const res = await API.getAPI(API_ROUTES.USERS_API, {id})
    dispatch({ type: UserActionType.DETAIL, payload: res[0] })
    return res[0]
  },
  setUserDetail: (form) => {
    dispatch({ type: UserActionType.UPDATE_DETAIL, payload: form })
  }
})