import { handleActions } from 'redux-actions';
import { MoviesActionTypes } from '../action';

export const initialState = {
  movies: [],
  isLoaded: false,
};

export const moviesReducer = handleActions(
  {
    [MoviesActionTypes.MOVIES_SUCCESS]: (state, { payload }) => ({
      ...state,
      movies: payload,
      isLoaded: true,
    }),
  },
  initialState
);
