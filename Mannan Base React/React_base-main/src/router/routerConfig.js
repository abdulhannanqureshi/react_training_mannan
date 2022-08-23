import { ROUTES } from 'utils/Common/Constant'

import Login from '../login'

import Contact from '../Contact'
import About from '../about'
import Context from '../ContextComponent/Parent'
import Test from '../test'
import FormFields from '../Form/Form'
import CommonTable from '../MaterialTable'
import Users from 'containers/users'
import EditUser from 'containers/users/Edit'
import Canvas from 'containers/canvas'
import { PrivateLayout, PublicLayout } from './routerLayout'


export const publicRoutes = [
  {
    key: 'login',
    path: '/login',
    component: Login,
    exact: true,
    layout: PublicLayout
  }
]

export const privateRoutes = [
  {
    key: 'Contact',
    path: '/',
    component: Contact,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'About',
    path: '/about',
    component: About,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'Context',
    path: '/context',
    component: Context,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'Test',
    path: '/test',
    component: Test,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'Table',
    path: '/table',
    component: CommonTable,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'FormFields',
    path: '/form',
    component: FormFields,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'User',
    path: ROUTES.USER_PATH,
    component: Users,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'EditUser',
    path: `${ROUTES.EDIT_USER_PATH}/:id`,
    component: EditUser,
    exact: true,
    layout: PrivateLayout
  },
  {
    key: 'Canvas',
    path: ROUTES.CANVAS_PATH,
    component: Canvas,
    layout: PrivateLayout
  }
]