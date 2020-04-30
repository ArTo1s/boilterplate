import { combineReducers } from 'redux';
import { RootState } from './state';

export { RootState };

function todos(state = '') {
  return state;
}

export const rootReducer = combineReducers<RootState>({
  todos,
});
