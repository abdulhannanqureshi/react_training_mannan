import { combineReducers } from 'redux';
import { seriesReducer } from './seriesReducer';
import { moviesReducer } from './moviesReducer';

const AppReducer = combineReducers({
  seriesReducer,
  moviesReducer,
});

export default AppReducer;
