import { createLogic } from 'redux-logic';
import { push } from 'react-router-redux';
import { seriesLogics } from './seriesLogic';
import { moviesLogics } from './moviesLogic';

export const redirectToLogic = createLogic({
  type: 'REDIRECT_TO',
  async process({ action }, dispatch, done) {
    dispatch(push(action.payload.path));
    done();
  },
});

const AllLogics = [...seriesLogics, ...moviesLogics, redirectToLogic];

export default AllLogics;
