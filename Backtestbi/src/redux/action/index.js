import { createAction } from 'redux-actions';
export * from './seriesAction';
export * from './moviesAction';

export const redirectTo = createAction('REDIRECT_TO');
