import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

/**
 * Configures a data store for our app to update state.
 * Adds reducers which can modify state, and a middleware for dealing with
 * asynchronous changes.
 * Also adds code to enable the Redux Devtools extension for Chrome.
 * If deploying to production, that line of code should be removed.
 * @param {Object} initialState an initial state to seed the app with, if any
 */
export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}