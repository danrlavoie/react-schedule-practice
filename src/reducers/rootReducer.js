import { combineReducers } from 'redux';
import csv from './csv';

/**
 * Combines together all reducers in the program
 * to build a global program state for components to access.
 */
export default combineReducers({
  csv
});