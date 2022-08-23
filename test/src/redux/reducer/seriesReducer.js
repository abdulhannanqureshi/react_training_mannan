import { handleActions } from 'redux-actions';
import { SeriesActionTypes } from '../action';

export const initialState = {
  series: [],
  isLoaded: false,
};

export const seriesReducer = handleActions(
  {
    [SeriesActionTypes.SERIES_SUCCESS]: (state, { payload }) => ({
      ...state,
      series: payload,
      isLoaded: true,
    }),
  },
  initialState
);
