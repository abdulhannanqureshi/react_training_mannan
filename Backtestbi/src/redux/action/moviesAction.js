import { createAction } from 'redux-actions';

export const MoviesActionTypes = {
  MOVIES_REQUEST: 'Request for Movies',
  MOVIES_SUCCESS: 'Movies successfully',
  MOVIES_FAILED: 'Movies failed',
};

export const moviesRequest = createAction(MoviesActionTypes.MOVIES_REQUEST);
export const moviesSuccess = createAction(MoviesActionTypes.MOVIES_SUCCESS);
export const moviesFailed = createAction(MoviesActionTypes.MOVIES_FAILED);
