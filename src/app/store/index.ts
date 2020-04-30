import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import { logger, thunk } from '../middleware';
import { RootState, rootReducer } from '../reducers';

export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  let middleware = applyMiddleware(thunk, logger, promiseMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<
    RootState
  >;

  return store;
}
