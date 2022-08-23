import { createLogic } from 'redux-logic';
import { MoviesActionTypes, moviesSuccess } from '../action';
import moviesData from '../sample.json';

const moviesLogic = createLogic({
  type: MoviesActionTypes.MOVIES_REQUEST,
  async process({ action }, dispatch, done) {
    try {
      const filterMovies = moviesData.entries.filter(
        (e) => e.releaseYear >= 2010 && e.programType === 'movie'
      );
      dispatch(moviesSuccess(filterMovies));
      done();
    } catch (error) {
      console.log(error);
    }
  },
});
export const moviesLogics = [moviesLogic];
