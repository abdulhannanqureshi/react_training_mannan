import { createLogic } from 'redux-logic';
import { SeriesActionTypes, seriesSuccess } from '../action';
import seriesData from '../sample.json';

const seriesLogic = createLogic({
  type: SeriesActionTypes.SERIES_REQUEST,
  async process({ action }, dispatch, done) {
    try {
      const filterSeries = seriesData.entries.filter(
        (e) => e.releaseYear >= 2010 && e.programType === 'series'
      );
      dispatch(seriesSuccess(filterSeries));
      done();
    } catch (error) {
      console.log(error);
    }
  },
});
export const seriesLogics = [seriesLogic];
