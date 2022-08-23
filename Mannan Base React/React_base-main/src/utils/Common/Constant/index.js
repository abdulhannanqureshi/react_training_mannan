import * as API from './ApiRoutes'
import * as ROUTER_PATH from './RouterPath'

export const API_ROUTES = {
  ...API.UserAPI
}

export const ROUTES = {
  ...ROUTER_PATH.USER_ROUTES,
  ...ROUTER_PATH.CANVAS_ROUTES
}