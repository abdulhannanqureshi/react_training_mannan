import { createAction } from 'redux-actions';

export const SeriesActionTypes = {
  SERIES_REQUEST: 'Request for Series',
  SERIES_SUCCESS: 'Series successfully',
  SERIES_FAILED: 'Series failed',
};

export const seriesRequest = createAction(SeriesActionTypes.SERIES_REQUEST);
export const seriesSuccess = createAction(SeriesActionTypes.SERIES_SUCCESS);
export const seriesFailed = createAction(SeriesActionTypes.SERIES_FAILED);
